import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MessageSquare, FileText, ListTodo, Workflow, BarChart,
  ArrowRight, CheckCircle2, Mic, Bot, Users, Brain,
  ShoppingBag, Calculator, Briefcase, Globe, Shield, Zap, Network,
  Mail, MessageCircle, Cloud, FileSpreadsheet, CreditCard, Layout,
  Filter, Calendar, PenTool, Search, BarChart2, FileAudio, Package,
  Truck, UserPlus, FileSearch, Receipt, Wallet, ShieldCheck,
  ClipboardCheck, PieChart, Home, Utensils, GraduationCap, Languages,
  TrendingUp
} from 'lucide-react';

export default function AutomatizacionPage() {
  const featuredAgents = [
    {
      icon: Mic,
      title: 'Agentes de Voz Hiperrealistas',
      description: 'Capaces de mantener conversaciones telefónicas fluidas, agendar citas, cualificar leads y realizar encuestas con una latencia mínima y entonación humana.',
      highlight: true,
      image: '/images/agents/voice-interface.png',
      flow: ["Voz Entrante", "Speech-to-Text", "LLM Cerebro", "Text-to-Speech", "Audio Saliente"]
    },
    {
      icon: ListTodo,
      title: 'Asistente de Project Manager',
      description: 'Organiza tareas en Notion, ClickUp o Asana. Persigue deadlines, asigna responsables, actualiza estados y genera reportes de progreso automáticamente.',
      highlight: false,
      image: '/images/agents/pm-dashboard.png',
      flow: ["Update Diario", "Análisis Estado", "Detectar Retrasos", "Notificar Slack", "Actualizar Tablero"]
    },
    {
      icon: MessageSquare,
      title: 'Soporte Omnicanal 24/7',
      description: 'Atención al cliente en WhatsApp, Instagram, Web y Email. Resuelve dudas, gestiona incidencias y escala casos complejos a humanos.',
      highlight: false,
      image: '/images/learn/chatbot.jpg',
      flow: ["Mensaje Usuario", "Base de Conocimiento", "Generar Respuesta", "Acción (Ticket/Reserva)", "Respuesta"]
    }
  ];

  const agentCategories = [
    {
      title: "Ventas & Marketing",
      icon: ShoppingBag,
      agents: [
        {
          title: "Cualificador de Leads",
          desc: "Filtra y puntúa prospectos automáticamente antes de pasarlos a ventas.",
          icon: Filter,
          image: '/images/agents/sales-analytics.png',
          flow: ["Form Web", "CRM", "Scoring AI", "Notificación Ventas"]
        },
        {
          title: "Agendador Automático",
          desc: "Coordina calendarios y cierra reuniones sin intercambio de emails.",
          icon: Calendar,
          image: '/images/agents/calendar-scheduler.png',
          flow: ["Email/Chat", "Calendar API", "Verificar Huecos", "Enviar Invite"]
        },
        {
          title: "Generador de Contenido",
          desc: "Crea posts, blogs y copy adaptado a tu voz de marca.",
          icon: PenTool,
          image: '/images/creative/skyflex.jpg',
          flow: ["Tendencia", "Redactor LLM", "Gen Imagen", "Programar Post"]
        },
        {
          title: "Respondedor Social",
          desc: "Interactúa con comentarios y DMs para aumentar el engagement.",
          icon: MessageCircle,
          image: '/images/learn/chatbot-lifestyle.png',
          flow: ["Comentario", "Análisis Tono", "Borrador Respuesta", "Publicar"]
        },
        {
          title: "Buscador de Prospectos",
          desc: "Scrapea y encuentra clientes potenciales que encajan con tu ICP.",
          icon: Search,
          image: '/images/services/ai-hub-real.png',
          flow: ["LinkedIn/Web", "Scraper", "Enriquecer Datos", "Email Frío"]
        },
        {
          title: "Analista de Marca",
          desc: "Monitoriza menciones y sentimiento en tiempo real.",
          icon: BarChart2,
          image: '/images/creative/twojeys.jpg',
          flow: ["Social Listening", "Base Datos", "Análisis Sentimiento", "Alerta"]
        }
      ]
    },
    {
      title: "Operaciones & Gestión",
      icon: Briefcase,
      agents: [
        {
          title: "Triaje de Email",
          desc: "Clasifica, etiqueta y redacta borradores de respuesta en tu bandeja.",
          icon: Mail,
          image: '/images/agents/email-triage.png',
          flow: ["Inbox", "Clasificador AI", "Redactar Borrador", "Etiquetar"]
        },
        {
          title: "Resumidor de Reuniones",
          desc: "Transcribe llamadas y extrae puntos de acción automáticamente.",
          icon: FileAudio,
          image: '/images/learn/learning-session-elegant.png',
          flow: ["Grabación", "Whisper (Audio)", "Resumen", "Crear Tareas"]
        },
        {
          title: "Gestor de Inventario",
          desc: "Predice roturas de stock y genera órdenes de compra.",
          icon: Package,
          image: '/images/agents/inventory-manager.png',
          flow: ["Datos Ventas", "Modelo Predicción", "Alerta Stock", "Orden Compra"]
        },
        {
          title: "Coordinador Logístico",
          desc: "Optimiza rutas y comunica estados de envío a clientes.",
          icon: Truck,
          image: '/images/agents/logistics.png',
          flow: ["Pedido", "Algoritmo Ruta", "App Conductor", "SMS Cliente"]
        },
        {
          title: "Asistente Onboarding",
          desc: "Guía a nuevos empleados por todo el proceso de alta.",
          icon: UserPlus,
          image: '/images/learn/tech-guy-natural.png',
          flow: ["Alta RRHH", "Email Bienvenida", "Crear Accesos", "Agendar Formación"]
        },
        {
          title: "Filtrado de CVs",
          desc: "Analiza cientos de currículums y destaca los mejores candidatos.",
          icon: FileSearch,
          image: '/images/agents/hr-cv.png',
          flow: ["PDF CV", "Parser", "Score Match", "Dashboard RRHH"]
        }
      ]
    },
    {
      title: "Finanzas & Legal",
      icon: Calculator,
      agents: [
        {
          title: "Procesador de Facturas",
          desc: "Extrae datos de PDFs y los introduce en tu software contable.",
          icon: Receipt,
          image: '/images/agents/finance-security.png',
          flow: ["PDF Factura", "OCR Vision", "Validación", "Entrada ERP"]
        },
        {
          title: "Agente de Cobros",
          desc: "Realiza seguimiento amistoso de facturas impagadas.",
          icon: Wallet,
          image: '/images/learn/trabajo.jpg',
          flow: ["Lista Impagos", "Estrategia Tono", "Email/SMS", "Link Pago"]
        },
        {
          title: "Generador de Presupuestos",
          desc: "Crea cotizaciones detalladas basadas en requerimientos.",
          icon: FileText,
          image: '/images/services/ai-hub-tech-elegant.png',
          flow: ["Datos Cliente", "Base Precios", "Generar PDF", "Enviar Email"]
        },
        {
          title: "Revisor de Contratos",
          desc: "Detecta cláusulas de riesgo en documentos legales estándar.",
          icon: ShieldCheck,
          image: '/images/agents/legal-contract.png',
          flow: ["Documento", "Legal AI", "Check Riesgos", "Informe"]
        },
        {
          title: "Auditor de Cumplimiento",
          desc: "Verifica que los procesos sigan las normativas vigentes.",
          icon: ClipboardCheck,
          image: '/images/services/ai-hub-real.png',
          flow: ["Logs Proceso", "Base Normativa", "Cruce Datos", "Reporte"]
        },
        {
          title: "Reportero Financiero",
          desc: "Consolida datos y genera informes de pérdidas y ganancias.",
          icon: PieChart,
          image: '/images/learn/web.jpg',
          flow: ["APIs Bancos", "Libro Mayor", "Análisis", "Dashboard CEO"]
        }
      ]
    },
    {
      title: "Especializados",
      icon: Brain,
      agents: [
        {
          title: "Virtual Staging",
          desc: "Amuebla digitalmente propiedades vacías para inmobiliarias.",
          icon: Home,
          image: '/images/creative/real-estate.jpg',
          flow: ["Foto Vacía", "Prompt Estilo", "Stable Diffusion", "Render Final"]
        },
        {
          title: "Gestor de Reservas",
          desc: "Administra mesas y turnos en restaurantes automáticamente.",
          icon: Utensils,
          image: '/images/learn/chatbot-lifestyle.png',
          flow: ["Llamada/Chat", "Check Disponibilidad", "Bloquear Mesa", "Confirmación"]
        },
        {
          title: "Tutor Personalizado",
          desc: "Crea planes de estudio y resuelve dudas a alumnos 24/7.",
          icon: GraduationCap,
          image: '/images/learn/learning-session.png',
          flow: ["Pregunta Alumno", "Base Conocimiento", "Explicación", "Quiz"]
        },
        {
          title: "Traductor Real-Time",
          desc: "Facilita la comunicación entre equipos internacionales.",
          icon: Languages,
          image: '/images/learn/chatbot.jpg',
          flow: ["Audio Entrada", "Transcipción", "Traducción", "Audio Salida"]
        },
        {
          title: "Analista de Mercado",
          desc: "Detecta tendencias emergentes analizando grandes volúmenes de datos.",
          icon: TrendingUp,
          image: '/images/services/ai-hub-warm.png',
          flow: ["Feed Noticias", "Detección Patrones", "Insight", "Estrategia"]
        },
        {
          title: "Entrenador de Ventas",
          desc: "Simula clientes difíciles para practicar objeciones.",
          icon: Users,
          image: '/images/learn/tech-guy-ai.png',
          flow: ["Escenario", "Bot Voz", "Interacción", "Feedback"]
        }
      ]
    }
  ];

  const tools = [
    { name: "Gmail", icon: "https://img.icons8.com/color/48/gmail-new.png", category: "Email" },
    { name: "Outlook", icon: "https://img.icons8.com/color/48/microsoft-outlook-2019--v1.png", category: "Email" },
    { name: "WhatsApp", icon: "https://img.icons8.com/color/48/whatsapp--v1.png", category: "Mensajería" },
    { name: "Slack", icon: "https://img.icons8.com/color/48/slack-new.png", category: "Mensajería" },
    { name: "HubSpot", icon: "https://img.icons8.com/color/48/hubspot.png", category: "CRM" },
    { name: "Salesforce", icon: "https://img.icons8.com/color/48/salesforce.png", category: "CRM" },
    { name: "Notion", icon: "https://img.icons8.com/color/48/notion--v1.png", category: "Productividad" },
    { name: "Airtable", icon: "https://img.icons8.com/color/48/airtable.png", category: "Base de Datos" },
    { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png", category: "Hojas de Cálculo" },
    { name: "Google Sheets", icon: "https://img.icons8.com/color/48/google-sheets.png", category: "Hojas de Cálculo" },
    { name: "Stripe", icon: "https://img.icons8.com/color/48/stripe.png", category: "Pagos" },
    { name: "Shopify", icon: "https://img.icons8.com/color/48/shopify.png", category: "E-commerce" }
  ];

  const process = [
    {
      number: '01',
      title: 'Auditoría de Flujos',
      description: 'Analizamos tus procesos actuales para identificar cuellos de botella y tareas repetitivas de alto valor.',
    },
    {
      number: '02',
      title: 'Diseño de la Arquitectura',
      description: 'Definimos qué agentes necesitas, qué herramientas usarán y cómo se comunicarán entre sí.',
    },
    {
      number: '03',
      title: 'Desarrollo e Integración',
      description: 'Construimos los agentes usando LLMs avanzados y los conectamos a tu stack tecnológico (CRM, ERP, etc.).',
    },
    {
      number: '04',
      title: 'Entrenamiento y Ajuste',
      description: 'Refinamos las respuestas y comportamientos del agente para que se alineen con tu voz de marca.',
    },
    {
      number: '05',
      title: 'Despliegue y Monitorización',
      description: 'Lanzamos los agentes y supervisamos su rendimiento para asegurar una mejora continua.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <HeaderNavigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Bot className="w-4 h-4 text-[#82ff1f]" />
              <span className="text-sm font-medium text-white/80">Fuerza Laboral Digital</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Automatiza tu negocio
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Implementamos trabajadores digitales que ejecutan tareas, toman decisiones y usan tus herramientas de software. Desde atender llamadas hasta gestionar proyectos enteros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-black font-medium text-lg py-4 px-8 rounded-full transition-all duration-300 hover:bg-[#82ff1f] hover:scale-105"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is an AI Agent Block */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#82ff1f]/10 to-blue-500/10 rounded-full blur-3xl" />
              <div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                {/* Visual representation of Nodes */}
                <div className="relative h-64 w-full mb-6 bg-black/50 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  {/* Central Node */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#82ff1f]/20 rounded-full flex items-center justify-center border border-[#82ff1f] shadow-[0_0_20px_rgba(130,255,31,0.3)] mb-2">
                      <Brain className="w-8 h-8 text-[#82ff1f]" />
                    </div>
                    <span className="text-xs font-mono text-[#82ff1f]">AGENTE CORE</span>
                  </div>

                  {/* Satellite Nodes */}
                  <div className="absolute top-1/4 left-1/4 animate-pulse">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500">
                      <MessageSquare className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 animate-pulse delay-75">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500">
                      <Database className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/3 right-1/3 animate-pulse delay-150">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500">
                      <Zap className="w-3 h-3 text-orange-500" />
                    </div>
                  </div>

                  {/* Connection Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                </div>

                <div className="flex items-start gap-4">
                  <Network className="w-6 h-6 text-[#82ff1f] mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Arquitectura de Nodos</h3>
                    <p className="text-sm text-zinc-400">
                      A diferencia de una automatización lineal (A entonces B), un agente es un sistema dinámico. El "cerebro" (LLM) decide qué herramienta usar (Email, CRM, Buscador) basándose en el objetivo que le des.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">¿Qué es realmente un Agente IA?</h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                Imagina un empleado digital que no solo sigue instrucciones, sino que <strong className="text-white">razona</strong>.
              </p>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Un Agente IA es un software autónomo que percibe su entorno, razona sobre cómo resolver un problema y actúa utilizando herramientas digitales. No es un simple script; es un sistema capaz de:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                  <span className="text-zinc-300">Planificar secuencias de tareas complejas.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                  <span className="text-zinc-300">Corregirse a sí mismo si encuentra un error.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                  <span className="text-zinc-300">Aprender del contexto de la empresa.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#82ff1f]" />
                  <span className="text-zinc-300">Interactuar con otros agentes o humanos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Agentes Destacados</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Las soluciones más demandadas para escalar operaciones sin aumentar plantilla.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAgents.map((agent, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 overflow-hidden flex flex-col ${agent.highlight
                  ? 'bg-zinc-900/50 border-[#82ff1f]/50 shadow-[0_0_30px_rgba(130,255,31,0.1)]'
                  : 'bg-zinc-900/30 border-white/10 hover:border-white/20'
                  }`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <Image
                    src={agent.image}
                    alt={agent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${agent.highlight ? 'bg-[#82ff1f]/10 text-[#82ff1f]' : 'bg-white/5 text-white'
                    }`}>
                    <agent.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-light mb-4">{agent.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 20+ Agents List - Redesigned */}
      <section className="py-24 relative bg-[#050505]">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-[#82ff1f] font-medium tracking-wider uppercase text-sm">Catálogo de Posibilidades</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
              Ecosistema de Agentes
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Explora las capacidades de nuestra fuerza laboral digital por departamento.
            </p>
          </div>

          <div className="space-y-16">
            {agentCategories.map((category, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#82ff1f]/10 flex items-center justify-center border border-[#82ff1f]/20">
                    <category.icon className="w-6 h-6 text-[#82ff1f]" />
                  </div>
                  <h3 className="text-3xl font-light text-white">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.agents.map((agent, i) => (
                    <div key={i} className="bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 group flex flex-col h-full">
                      {/* Agent Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                        <Image
                          src={agent.image}
                          alt={agent.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                            <agent.icon className="w-4 h-4 text-[#82ff1f]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-lg font-medium text-white mb-2 group-hover:text-[#82ff1f] transition-colors">{agent.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">{agent.desc}</p>

                        {/* Flow Diagram for List Agents */}
                        <div className="pt-4 border-t border-white/5 mt-auto">
                          <div className="flex flex-wrap items-center gap-y-2 gap-x-1">
                            {agent.flow.map((step, stepIdx) => (
                              <div key={stepIdx} className="flex items-center gap-1">
                                <span className="text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-white/5 text-zinc-500 border border-white/5 whitespace-nowrap">
                                  {step}
                                </span>
                                {stepIdx < agent.flow.length - 1 && (
                                  <ArrowRight className="w-2.5 h-2.5 text-zinc-700" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Conectamos con tu Stack
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nuestros agentes se integran nativamente con las herramientas que ya utilizas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{tool.name}</span>
                <span className="text-xs text-zinc-500 mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Un proceso estructurado para garantizar resultados predecibles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 bg-zinc-900/30 rounded-3xl border border-white/5 transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/50"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-[#82ff1f] font-mono font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#82ff1f]/5" />
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            ¿Listo para automatizar?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Cuéntanos qué procesos te quitan tiempo y diseñaremos el agente perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-black font-bold text-lg py-5 px-10 rounded-full transition-all duration-300 hover:bg-[#82ff1f] hover:scale-105"
            >
              Empezar ahora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Database(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}