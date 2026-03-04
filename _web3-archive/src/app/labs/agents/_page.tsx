'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderNavigation from '@/components/sections/header-navigation';
import {
  Bot, Download, Play, RefreshCw,
  Send, Plus, X, LayoutTemplate,
  MousePointer2, Trash2, Unlink
} from 'lucide-react';
import Image from 'next/image';
import { AGENT_TYPES, CAPABILITIES, INTEGRATIONS, PERSONALITY_TRAITS, AGENT_RULES } from '@/components/agent-builder/data';

// --- Types ---
type NodeType = 'agent-type' | 'capability' | 'integration' | 'personality';

interface NodeData {
  id: string;
  type: NodeType;
  label: string;
  icon?: any;
  image?: string;
  subLabel?: string;
  value: string;
  x: number;
  y: number;
  parentId?: string;
}

interface AgentConfig {
  type: string | null;
  capabilities: string[];
  integrations: string[];
  personality: {
    tone: string;
    language: string;
    name: string;
  };
}

const INITIAL_CONFIG: AgentConfig = {
  type: null,
  capabilities: [],
  integrations: [],
  personality: {
    tone: 'formal',
    language: 'es',
    name: 'Mi Agente'
  }
};

// --- Helper: Smart Parent Detection ---
const getSmartParentId = (nodeValue: string, nodeType: NodeType, currentNodes: NodeData[]): string | undefined => {
  if (nodeType === 'capability') {
    const agent = currentNodes.find(n => n.type === 'agent-type');
    return agent?.id;
  }

  if (nodeType === 'integration') {
    const map: Record<string, string[]> = {
      'whatsapp': ['whatsapp_manage', 'msg_response'],
      'telegram': ['msg_response'],
      'messenger': ['msg_response', 'social_posts'],
      'instagram': ['social_posts', 'msg_response'],
      'slack': ['msg_response', 'alerts'],
      'gmail': ['email_send', 'email_read'],
      'outlook': ['email_send', 'email_read'],
      'mailchimp': ['email_send', 'marketing'],
      'gdrive': ['pdf_read', 'report_gen'],
      'dropbox': ['pdf_read'],
      'notion': ['notion_edit', 'pdf_read'],
      'clickup': ['task_create'],
      'trello': ['task_create'],
      'asana': ['task_create'],
      'gcalendar': ['booking_manage', 'reminders'],
      'calendly': ['booking_manage'],
      'googleads': ['marketing'],
      'meta': ['marketing', 'social_posts'],
      'gsheets': ['db_query', 'report_gen'],
      'airtable': ['db_query'],
      'supabase': ['db_query'],
    };

    const possibleCaps = map[nodeValue] || [];
    const parent = currentNodes.find(n => n.type === 'capability' && possibleCaps.includes(n.value));
    return parent?.id;
  }

  if (nodeType === 'personality') {
    const agent = currentNodes.find(n => n.type === 'agent-type');
    return agent?.id;
  }

  return undefined;
};

export default function AgentBuilderPage() {
  // --- State ---
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState<NodeType>('agent-type');
  const containerRef = useRef<HTMLDivElement>(null);

  // Connection State
  const [connectionStart, setConnectionStart] = useState<{ nodeId: string, x: number, y: number } | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number, y: number } | null>(null);

  // Sandbox State
  const [messages, setMessages] = useState<{ role: 'user' | 'agent', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Derived Config ---
  const config = useMemo(() => {
    const newConfig: AgentConfig = { ...INITIAL_CONFIG };
    nodes.forEach(node => {
      if (node.type === 'agent-type') newConfig.type = node.value;
      if (node.type === 'capability') newConfig.capabilities.push(node.value);
      if (node.type === 'integration') newConfig.integrations.push(node.value);
      if (node.type === 'personality') newConfig.personality.tone = node.value;
    });
    return newConfig;
  }, [nodes]);

  // --- Filtering Logic ---
  const currentAgentType = nodes.find(n => n.type === 'agent-type')?.value;

  const filteredCapabilities = useMemo(() => {
    if (!currentAgentType) return [];
    const rules = AGENT_RULES[currentAgentType];
    if (!rules) return CAPABILITIES; // Fallback

    return CAPABILITIES.map(cat => ({
      ...cat,
      items: cat.items.filter(item => rules.allowedCaps.includes(item.id))
    })).filter(cat => cat.items.length > 0);
  }, [currentAgentType]);

  const filteredIntegrations = useMemo(() => {
    if (!currentAgentType) return [];
    const rules = AGENT_RULES[currentAgentType];
    if (!rules) return INTEGRATIONS;

    return INTEGRATIONS.map(cat => ({
      ...cat,
      items: cat.items.filter(item => rules.allowedInts.includes(item.id))
    })).filter(cat => cat.items.length > 0);
  }, [currentAgentType]);


  // --- Effects ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Node Actions ---
  const addNode = (type: NodeType, item: any) => {
    const id = Math.random().toString(36).substr(2, 9);
    let x = 100;
    let y = 300;

    let parentId = getSmartParentId(item.id, type, nodes);

    if (type === 'agent-type') {
      x = 100;
      y = 300;
      setNodes(prev => {
        const filtered = prev.filter(n => n.type !== 'agent-type');
        return [...filtered, {
          id, type, label: item.title, value: item.id,
          icon: item.icon, subLabel: item.description, x, y
        }];
      });
      setActiveSidebarTab('capability');
      return;
    }

    if (parentId) {
      const parent = nodes.find(n => n.id === parentId);
      if (parent) {
        const siblings = nodes.filter(n => n.parentId === parentId);
        x = parent.x + 350;
        y = parent.y + (siblings.length * 120);
      }
    } else {
      if (type === 'capability') x = 450;
      if (type === 'integration') x = 800;
      if (type === 'personality') { x = 100; y = 500; }
    }

    if (type === 'personality') {
      setNodes(prev => {
        const filtered = prev.filter(n => n.type !== 'personality');
        return [...filtered, {
          id, type, label: item.label, value: item.id,
          subLabel: item.desc, x, y, parentId
        }];
      });
      return;
    }

    const newNode: NodeData = {
      id,
      type,
      label: item.title || item.label || item.name,
      value: item.id,
      icon: item.icon,
      image: item.icon && typeof item.icon === 'string' ? item.icon : undefined,
      subLabel: item.description || item.desc,
      x,
      y,
      parentId
    };

    setNodes(prev => [...prev, newNode]);
  };

  const removeNode = (id: string) => {
    setNodes(prev => prev.filter(n => n.id !== id));
    setNodes(prev => prev.map(n => n.parentId === id ? { ...n, parentId: undefined } : n));
  };

  const updateNodePosition = (id: string, newX: number, newY: number) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, x: newX, y: newY } : n));
  };

  const unlinkNode = (id: string) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, parentId: undefined } : n));
  };

  // --- Connection Logic ---
  const handleMouseDownOnHandle = (e: React.MouseEvent, nodeId: string, isOutput: boolean) => {
    e.stopPropagation(); // Prevent drag start on node
    if (!isOutput) return; // Only drag from output handles for now

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const startX = e.clientX - containerRect.left;
      const startY = e.clientY - containerRect.top;
      setConnectionStart({ nodeId, x: startX, y: startY });
      setCursorPos({ x: startX, y: startY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (connectionStart && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      });
    }
  };

  const handleMouseUpOnNode = (e: React.MouseEvent, targetNodeId: string) => {
    if (connectionStart && connectionStart.nodeId !== targetNodeId) {
      // Create connection: Target becomes child of Start
      setNodes(prev => prev.map(n => n.id === targetNodeId ? { ...n, parentId: connectionStart.nodeId } : n));
    }
    setConnectionStart(null);
    setCursorPos(null);
  };

  const handleMouseUpOnContainer = () => {
    setConnectionStart(null);
    setCursorPos(null);
  };

  // --- Direct DOM Manipulation for Smooth Drag ---
  const updateLine = (nodeId: string, x: number, y: number) => {
    const childPath = document.getElementById(`path-${nodeId}`);
    if (childPath) {
      const node = nodes.find(n => n.id === nodeId);
      if (node && node.parentId) {
        const parent = nodes.find(n => n.id === node.parentId);
        if (parent) {
          const startX = parent.x + 256;
          const startY = parent.y + 40;
          const endX = x;
          const endY = y + 40;
          const cp1X = startX + (endX - startX) / 2;
          const cp2X = startX + (endX - startX) / 2;
          childPath.setAttribute('d', `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`);
        }
      }
    }

    const children = nodes.filter(n => n.parentId === nodeId);
    children.forEach(child => {
      const childPath = document.getElementById(`path-${child.id}`);
      if (childPath) {
        const startX = x + 256;
        const startY = y + 40;
        const endX = child.x;
        const endY = child.y + 40;
        const cp1X = startX + (endX - startX) / 2;
        const cp2X = startX + (endX - startX) / 2;
        childPath.setAttribute('d', `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`);
      }
    });
  };

  // --- Sandbox Logic ---
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsThinking(true);
    try {
      const res = await fetch('/api/agent-sandbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, config })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'agent', content: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'agent', content: "Error de conexión." }]);
    } finally {
      setIsThinking(false);
    }
  };

  const exportConfig = () => {
    const jsonString = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `agent-config.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden flex flex-col">
      <HeaderNavigation />

      <div className="flex-1 flex pt-[90px] h-[calc(100vh-90px)]">

        {/* --- SIDEBAR --- */}
        <div className="w-80 bg-[#0a0a0a] border-r border-[#222] flex flex-col z-20 shadow-2xl">
          <div className="p-4 border-b border-[#222]">
            <h2 className="font-medium text-white flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-[#82ff1f]" />
              Componentes
            </h2>
            <p className="text-xs text-[#666] mt-1">Haz clic para añadir al lienzo</p>
          </div>

          <div className="flex border-b border-[#222]">
            {['agent-type', 'capability', 'integration', 'personality'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSidebarTab(tab as NodeType)}
                className={`flex-1 py-3 text-[10px] uppercase font-bold tracking-wider transition-colors ${activeSidebarTab === tab ? 'text-[#82ff1f] border-b-2 border-[#82ff1f] bg-[#82ff1f]/5' : 'text-[#666] hover:text-white'}`}
              >
                {tab === 'agent-type' ? 'Tipo' : tab === 'capability' ? 'Caps' : tab === 'integration' ? 'Apps' : 'Pers'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {activeSidebarTab === 'agent-type' && AGENT_TYPES.map(item => (
              <div key={item.id} onClick={() => addNode('agent-type', item)} className="p-3 rounded-lg bg-[#111] border border-[#222] hover:border-[#82ff1f] cursor-pointer transition-all group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md bg-[#222] flex items-center justify-center text-[#82ff1f]`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#82ff1f]">{item.title}</div>
                    <div className="text-[10px] text-[#666] line-clamp-1">{item.description}</div>
                  </div>
                  <Plus className="w-4 h-4 text-[#444] ml-auto group-hover:text-[#82ff1f]" />
                </div>
              </div>
            ))}

            {activeSidebarTab === 'capability' && (
              !currentAgentType ? (
                <div className="text-center p-8 opacity-50">
                  <Bot className="w-8 h-8 mx-auto mb-2 text-[#666]" />
                  <p className="text-xs text-[#666]">
                    Selecciona primero un <br /><strong>Tipo de Agente</strong>.
                  </p>
                </div>
              ) : (
                filteredCapabilities.map(cat => (
                  <div key={cat.category} className="mb-4">
                    <h3 className="text-[10px] uppercase font-bold text-[#444] mb-2 tracking-wider">{cat.category}</h3>
                    <div className="space-y-2">
                      {cat.items.map(item => (
                        <div key={item.id} onClick={() => addNode('capability', item)} className="p-2 rounded-lg bg-[#111] border border-[#222] hover:border-[#82ff1f] cursor-pointer transition-all flex items-center gap-3 group">
                          <div className="w-6 h-6 rounded bg-[#222] flex items-center justify-center text-[#666]">
                            <item.icon className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-[#ccc] group-hover:text-white">{item.label}</span>
                          <Plus className="w-3 h-3 text-[#444] ml-auto group-hover:text-[#82ff1f]" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )
            )}

            {activeSidebarTab === 'integration' && (
              !currentAgentType ? (
                <div className="text-center p-8 opacity-50">
                  <Bot className="w-8 h-8 mx-auto mb-2 text-[#666]" />
                  <p className="text-xs text-[#666]">
                    Selecciona primero un <br /><strong>Tipo de Agente</strong>.
                  </p>
                </div>
              ) : (
                filteredIntegrations.map(cat => (
                  <div key={cat.category} className="mb-4">
                    <h3 className="text-[10px] uppercase font-bold text-[#444] mb-2 tracking-wider">{cat.category}</h3>
                    <div className="space-y-2">
                      {cat.items.map(item => (
                        <div key={item.id} onClick={() => addNode('integration', item)} className="p-2 rounded-lg bg-[#111] border border-[#222] hover:border-[#82ff1f] cursor-pointer transition-all flex items-center gap-3 group">
                          <div className="w-8 h-8 relative bg-white/5 rounded p-1">
                            <Image src={item.icon} alt={item.name} fill className="object-contain p-1" />
                          </div>
                          <span className="text-sm text-[#ccc] group-hover:text-white">{item.name}</span>
                          <Plus className="w-3 h-3 text-[#444] ml-auto group-hover:text-[#82ff1f]" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )
            )}

            {activeSidebarTab === 'personality' && PERSONALITY_TRAITS.map(item => (
              <div key={item.id} onClick={() => addNode('personality', item)} className="p-3 rounded-lg bg-[#111] border border-[#222] hover:border-[#82ff1f] cursor-pointer transition-all group">
                <div className="text-sm font-medium text-white group-hover:text-[#82ff1f]">{item.label}</div>
                <div className="text-[10px] text-[#666]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CANVAS --- */}
        <div
          className="flex-1 relative bg-[#050505] overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOnContainer}
        >
          {/* Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {nodes.map(node => {
              if (!node.parentId) return null;
              const parent = nodes.find(n => n.id === node.parentId);
              if (!parent) return null;

              const startX = parent.x + 256;
              const startY = parent.y + 40;
              const endX = node.x;
              const endY = node.y + 40;

              const controlPoint1X = startX + (endX - startX) / 2;
              const controlPoint1Y = startY;
              const controlPoint2X = startX + (endX - startX) / 2;
              const controlPoint2Y = endY;

              return (
                <path
                  key={`conn-${node.id}`}
                  id={`path-${node.id}`}
                  d={`M ${startX} ${startY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${endX} ${endY}`}
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                />
              );
            })}

            {/* Temporary Dragging Line */}
            {connectionStart && cursorPos && (
              <path
                d={`M ${connectionStart.x} ${connectionStart.y} C ${connectionStart.x + 50} ${connectionStart.y}, ${cursorPos.x - 50} ${cursorPos.y}, ${cursorPos.x} ${cursorPos.y}`}
                stroke="#82ff1f"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            )}
          </svg>

          {/* Empty State */}
          {nodes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center max-w-md p-8 border border-dashed border-[#333] rounded-3xl bg-[#111]/50 backdrop-blur-sm">
                <MousePointer2 className="w-12 h-12 text-[#82ff1f] mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-light text-white mb-2">Lienzo Vacío</h3>
                <p className="text-[#666]">
                  Selecciona un <strong>Tipo de Agente</strong> para comenzar.
                </p>
              </div>
            </div>
          )}

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              drag
              dragMomentum={false}
              dragConstraints={containerRef}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              whileDrag={{ scale: 1.05, zIndex: 20, cursor: 'grabbing' }}
              onDrag={(e, info) => {
                const containerRect = containerRef.current?.getBoundingClientRect();
                if (containerRect) {
                  const x = info.point.x - containerRect.left;
                  const y = info.point.y - containerRect.top;
                  updateLine(node.id, x, y);
                }
              }}
              onDragEnd={(e, info) => {
                const element = e.target as HTMLElement;
                const rect = element.getBoundingClientRect();
                const containerRect = containerRef.current?.getBoundingClientRect();
                if (containerRect) {
                  updateNodePosition(node.id, rect.left - containerRect.left, rect.top - containerRect.top);
                }
              }}
              onMouseUp={(e) => handleMouseUpOnNode(e, node.id)}
              className={`absolute w-64 rounded-xl border shadow-2xl backdrop-blur-md flex flex-col overflow-visible transition-colors cursor-grab ${node.type === 'agent-type' ? 'bg-[#111] border-[#82ff1f] shadow-[0_0_30px_rgba(130,255,31,0.1)]' :
                  'bg-[#0a0a0a] border-[#333]'
                }`}
              style={{ left: node.x, top: node.y }}
            >
              {/* Connection Handles */}
              {/* Input Handle (Left) */}
              <div
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair group z-50"
                onMouseUp={(e) => { e.stopPropagation(); handleMouseUpOnNode(e, node.id); }}
              >
                <div className={`w-3 h-3 rounded-full border-2 transition-all ${connectionStart ? 'bg-[#82ff1f] border-[#82ff1f] scale-125 animate-pulse' : 'bg-[#0a0a0a] border-[#444] group-hover:border-[#82ff1f]'
                  }`} />
              </div>

              {/* Output Handle (Right) */}
              <div
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-crosshair group z-50"
                onMouseDown={(e) => handleMouseDownOnHandle(e, node.id, true)}
              >
                <div className="w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-[#444] group-hover:border-[#82ff1f] transition-colors" />
              </div>

              <div className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider flex justify-between items-center rounded-t-xl ${node.type === 'agent-type' ? 'bg-[#82ff1f] text-black' :
                  'bg-[#1a1a1a] text-[#666]'
                }`}>
                <div className="flex items-center gap-2">
                  {node.type === 'agent-type' ? 'NODO PRINCIPAL' : node.type}
                  {node.parentId && (
                    <button onClick={(e) => { e.stopPropagation(); unlinkNode(node.id); }} title="Desconectar" className="hover:text-red-400">
                      <Unlink className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); removeNode(node.id); }}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                {node.image ? (
                  <div className="w-10 h-10 relative bg-white/5 rounded-lg shrink-0 p-1 border border-[#333]">
                    <Image src={node.image} alt={node.label} fill className="object-contain" />
                  </div>
                ) : node.icon ? (
                  <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${node.type === 'agent-type' ? 'bg-[#82ff1f]/20 text-[#82ff1f]' : 'bg-[#222] text-[#888]'
                    }`}>
                    <node.icon className="w-5 h-5" />
                  </div>
                ) : null}

                <div>
                  <div className="font-medium text-white text-sm leading-tight mb-1">{node.label}</div>
                  {node.subLabel && (
                    <div className="text-[10px] text-[#666] leading-tight">{node.subLabel}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating Actions */}
          <div className="absolute bottom-8 right-8 flex gap-4 z-30">
            <button
              onClick={() => setNodes([])}
              className="p-4 rounded-full bg-[#111] text-[#666] hover:text-white hover:bg-[#222] border border-[#333] shadow-lg transition-all"
              title="Limpiar lienzo"
            >
              <Trash2 className="w-6 h-6" />
            </button>
            <button
              onClick={exportConfig}
              className="px-6 py-4 rounded-full bg-[#111] text-white hover:bg-[#222] border border-[#333] shadow-lg font-medium flex items-center gap-2 transition-all"
            >
              <Download className="w-5 h-5" />
              Exportar JSON
            </button>
            <button
              onClick={() => setIsSandboxOpen(true)}
              className="px-8 py-4 rounded-full bg-[#82ff1f] text-black font-bold shadow-[0_0_30px_rgba(130,255,31,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Probar Agente
            </button>
          </div>
        </div>
      </div>

      {/* SANDBOX MODAL */}
      <AnimatePresence>
        {isSandboxOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0a0a0a] border-l border-[#222] shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 bg-[#111] border-b border-[#222] flex items-center justify-between pt-24">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#82ff1f] animate-pulse" />
                <div>
                  <h3 className="font-medium text-white">{config.personality.name}</h3>
                  <p className="text-xs text-[#666]">
                    {config.type ? config.type : 'Agente sin tipo'} • {config.capabilities.length} caps
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setMessages([])} className="p-2 hover:bg-[#222] rounded-lg text-[#666] hover:text-white transition-colors">
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button onClick={() => setIsSandboxOpen(false)} className="p-2 hover:bg-[#222] rounded-lg text-[#666] hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0a0a0a]">
              {messages.length === 0 && (
                <div className="text-center mt-20 opacity-50">
                  <Bot className="w-16 h-16 mx-auto mb-6 text-[#82ff1f]" />
                  <p className="text-[#666]">
                    El entorno de pruebas está activo. <br />
                    Configura tu agente en el lienzo y prueba aquí.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-[#82ff1f] text-black rounded-tr-none'
                    : 'bg-[#111] text-white border border-[#222] rounded-tl-none'
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-[#111] border border-[#222] rounded-2xl rounded-tl-none p-4 flex gap-1">
                    <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[#666] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-6 bg-[#111] border-t border-[#222]">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe un mensaje..."
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded-full pl-6 pr-14 py-4 text-white focus:border-[#82ff1f] focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isThinking}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#82ff1f] rounded-full text-black hover:bg-[#6edc15] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}