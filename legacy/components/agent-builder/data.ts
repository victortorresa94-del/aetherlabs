import {
    MessageSquare, Globe, Mic, Users, ShoppingBag, Headset, Calendar,
    FileText, BarChart3, Settings, Mail, Database, Camera, Smartphone,
    Share2, Search, Edit3, Image as ImageIcon, Video, Bell, Shield
} from 'lucide-react';

export const AGENT_TYPES = [
    {
        id: 'whatsapp',
        title: 'Agente de WhatsApp',
        description: 'Automatiza respuestas, ventas y soporte directamente en WhatsApp.',
        icon: MessageSquare,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20'
    },
    {
        id: 'web',
        title: 'Agente Web',
        description: 'Chatbot inteligente incrustado en tu sitio web para captar leads.',
        icon: Globe,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20'
    },
    {
        id: 'voice',
        title: 'Agente de Voz',
        description: 'Recibe y realiza llamadas telefónicas con voz humana natural.',
        icon: Mic,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    },
    {
        id: 'internal',
        title: 'Gestión Interna',
        description: 'Ayuda a tu equipo a buscar documentos y gestionar tareas.',
        icon: Users,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'border-orange-400/20'
    },
    {
        id: 'sales',
        title: 'Agente de Ventas',
        description: 'Experto en cierre, seguimiento de leads y negociación.',
        icon: ShoppingBag,
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        border: 'border-emerald-400/20'
    },
    {
        id: 'support',
        title: 'Atención al Cliente',
        description: 'Resolución de dudas 24/7 con empatía y precisión.',
        icon: Headset,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        border: 'border-cyan-400/20'
    },
    {
        id: 'booking',
        title: 'Agente de Reservas',
        description: 'Gestiona citas, calendarios y recordatorios automáticamente.',
        icon: Calendar,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
        border: 'border-pink-400/20'
    },
    {
        id: 'content',
        title: 'Agente de Contenido',
        description: 'Redacta blogs, emails y posts para redes sociales.',
        icon: FileText,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20'
    },
    {
        id: 'analyst',
        title: 'Agente Analítico',
        description: 'Analiza datos, reportes y métricas para dar consejos.',
        icon: BarChart3,
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10',
        border: 'border-indigo-400/20'
    },
    {
        id: 'automation',
        title: 'Automatización',
        description: 'Conecta apps y ejecuta flujos de trabajo complejos.',
        icon: Settings,
        color: 'text-gray-400',
        bg: 'bg-gray-400/10',
        border: 'border-gray-400/20'
    }
];

export const CAPABILITIES = [
    {
        category: 'Comunicaciones',
        color: 'bg-blue-500',
        items: [
            { id: 'msg_response', label: 'Responder mensajes', icon: MessageSquare },
            { id: 'email_send', label: 'Enviar correos', icon: Mail },
            { id: 'email_read', label: 'Leer emails', icon: Mail },
            { id: 'whatsapp_manage', label: 'Gestionar WhatsApp', icon: Smartphone },
            { id: 'calls', label: 'Atender llamadas', icon: Mic },
            { id: 'web_chat', label: 'Responder en web', icon: Globe },
        ]
    },
    {
        category: 'Operativa Interna',
        color: 'bg-green-500',
        items: [
            { id: 'web_search', label: 'Buscar en Google', icon: Search },
            { id: 'db_query', label: 'Consultar base de datos', icon: Database },
            { id: 'pdf_read', label: 'Leer documentos PDF', icon: FileText },
            { id: 'report_gen', label: 'Generar informes', icon: BarChart3 },
            { id: 'task_create', label: 'Crear tareas (ClickUp)', icon: Settings },
            { id: 'notion_edit', label: 'Modificar Notion', icon: FileText },
            { id: 'reminders', label: 'Enviar recordatorios', icon: Bell },
            { id: 'booking_manage', label: 'Gestionar reservas', icon: Calendar },
        ]
    },
    {
        category: 'Contenido',
        color: 'bg-orange-500',
        items: [
            { id: 'copywriting', label: 'Redacción de textos', icon: Edit3 },
            { id: 'social_posts', label: 'Crear posts redes', icon: Share2 },
            { id: 'sales_copy', label: 'Copies comerciales', icon: ShoppingBag },
            { id: 'img_gen', label: 'Generar imágenes', icon: ImageIcon },
            { id: 'video_gen', label: 'Generar vídeos', icon: Video },
            { id: 'rewrite', label: 'Reescribir textos', icon: Edit3 },
        ]
    },
    {
        category: 'Automatización',
        color: 'bg-red-500',
        items: [
            { id: 'scheduled_tasks', label: 'Tareas programadas', icon: Calendar },
            { id: 'error_detect', label: 'Detectar fallos', icon: Shield },
            { id: 'alerts', label: 'Enviar alertas', icon: Bell },
            { id: 'monitoring', label: 'Monitorear sistemas', icon: BarChart3 },
            { id: 'api_integration', label: 'Integrar APIs', icon: Settings },
        ]
    }
];

export const INTEGRATIONS = [
    {
        category: 'Mensajería',
        items: [
            { id: 'whatsapp', name: 'WhatsApp', icon: 'https://img.icons8.com/color/48/whatsapp--v1.png' },
            { id: 'telegram', name: 'Telegram', icon: 'https://img.icons8.com/color/48/telegram-app.png' },
            { id: 'messenger', name: 'Messenger', icon: 'https://img.icons8.com/color/48/facebook-messenger--v1.png' },
            { id: 'instagram', name: 'Instagram', icon: 'https://img.icons8.com/fluency/48/instagram-new.png' },
            { id: 'slack', name: 'Slack', icon: 'https://img.icons8.com/color/48/slack-new.png' },
            { id: 'zendesk', name: 'Zendesk', icon: 'https://img.icons8.com/color/48/zendesk.png' },
        ]
    },
    {
        category: 'Email',
        items: [
            { id: 'gmail', name: 'Gmail', icon: 'https://img.icons8.com/color/48/gmail-new.png' },
            { id: 'outlook', name: 'Outlook', icon: 'https://img.icons8.com/color/48/microsoft-outlook-2019--v1.png' },
            { id: 'mailchimp', name: 'Mailchimp', icon: 'https://img.icons8.com/color/48/mailchimp.png' },
        ]
    },
    {
        category: 'Archivos',
        items: [
            { id: 'gdrive', name: 'Google Drive', icon: 'https://img.icons8.com/color/48/google-drive--v1.png' },
            { id: 'dropbox', name: 'Dropbox', icon: 'https://img.icons8.com/color/48/dropbox.png' },
            { id: 'notion', name: 'Notion', icon: 'https://img.icons8.com/color/48/notion--v1.png' },
        ]
    },
    {
        category: 'CRM & Gestión',
        items: [
            { id: 'hubspot', name: 'HubSpot', icon: 'https://img.icons8.com/color/48/hubspot.png' },
            { id: 'salesforce', name: 'Salesforce', icon: 'https://img.icons8.com/color/48/salesforce.png' },
            { id: 'clickup', name: 'ClickUp', icon: 'https://img.icons8.com/color/48/clickup-new.png' },
            { id: 'trello', name: 'Trello', icon: 'https://img.icons8.com/color/48/trello.png' },
            { id: 'asana', name: 'Asana', icon: 'https://img.icons8.com/color/48/asana.png' },
        ]
    },
    {
        category: 'Bases de datos',
        items: [
            { id: 'gsheets', name: 'Google Sheets', icon: 'https://img.icons8.com/color/48/google-sheets.png' },
            { id: 'airtable', name: 'Airtable', icon: 'https://img.icons8.com/color/48/airtable.png' },
            { id: 'supabase', name: 'Supabase', icon: 'https://img.icons8.com/color/48/supabase.png' },
        ]
    },
    {
        category: 'E-commerce',
        items: [
            { id: 'shopify', name: 'Shopify', icon: 'https://img.icons8.com/color/48/shopify.png' },
            { id: 'woocommerce', name: 'WooCommerce', icon: 'https://img.icons8.com/color/48/woocommerce.png' },
            { id: 'stripe', name: 'Stripe', icon: 'https://img.icons8.com/color/48/stripe.png' },
        ]
    },
    {
        category: 'Web',
        items: [
            { id: 'wordpress', name: 'WordPress', icon: 'https://img.icons8.com/color/48/wordpress.png' },
            { id: 'webflow', name: 'Webflow', icon: 'https://img.icons8.com/color/48/webflow.png' },
        ]
    },
    {
        category: 'Calendario',
        items: [
            { id: 'gcalendar', name: 'Google Calendar', icon: 'https://img.icons8.com/color/48/google-calendar--v1.png' },
            { id: 'calendly', name: 'Calendly', icon: 'https://img.icons8.com/color/48/calendly.png' },
        ]
    },
    {
        category: 'Marketing & Auto',
        items: [
            { id: 'googleads', name: 'Google Ads', icon: 'https://img.icons8.com/color/48/google-ads.png' },
            { id: 'meta', name: 'Meta Ads', icon: 'https://img.icons8.com/color/48/meta.png' },
            { id: 'zapier', name: 'Zapier', icon: 'https://img.icons8.com/color/48/zapier.png' },
            { id: 'make', name: 'Make', icon: 'https://img.icons8.com/color/48/make.png' },
        ]
    }
];

export const PERSONALITY_TRAITS = [
    { id: 'formal', label: 'Formal y Profesional', desc: 'Usted, serio, directo.' },
    { id: 'friendly', label: 'Amistoso y Cercano', desc: 'Tú, emojis, cálido.' },
    { id: 'sales', label: 'Vendedor Agresivo', desc: 'Persuasivo, enfocado en cierre.' },
    { id: 'support', label: 'Soporte Técnico', desc: 'Paciente, detallado, resolutivo.' },
    { id: 'humorous', label: 'Con humor', desc: 'Divertido, ligero, ingenioso.' },
];

// --- Rules for Filtering ---
export const AGENT_RULES: Record<string, { allowedCaps: string[], allowedInts: string[] }> = {
    'whatsapp': {
        allowedCaps: ['msg_response', 'whatsapp_manage', 'sales_copy', 'img_gen', 'reminders', 'booking_manage', 'db_query'],
        allowedInts: ['whatsapp', 'hubspot', 'salesforce', 'googleads', 'meta', 'gcalendar', 'gsheets', 'airtable', 'zapier', 'make']
    },
    'web': {
        allowedCaps: ['web_chat', 'msg_response', 'sales_copy', 'booking_manage', 'email_send', 'report_gen'],
        allowedInts: ['wordpress', 'webflow', 'shopify', 'woocommerce', 'hubspot', 'zendesk', 'mailchimp', 'gcalendar', 'calendly']
    },
    'voice': {
        allowedCaps: ['calls', 'booking_manage', 'msg_response', 'reminders'],
        allowedInts: ['gcalendar', 'calendly', 'hubspot', 'salesforce', 'twilio', 'vapi'] // Added twilio/vapi conceptually if they existed
    },
    'internal': {
        allowedCaps: ['pdf_read', 'report_gen', 'task_create', 'notion_edit', 'db_query', 'web_search', 'email_read', 'email_send'],
        allowedInts: ['slack', 'gdrive', 'dropbox', 'notion', 'clickup', 'trello', 'asana', 'gsheets', 'airtable', 'gmail', 'outlook']
    },
    'sales': {
        allowedCaps: ['sales_copy', 'email_send', 'calls', 'msg_response', 'booking_manage', 'reminders'],
        allowedInts: ['hubspot', 'salesforce', 'stripe', 'gmail', 'outlook', 'whatsapp', 'linkedin', 'calendly']
    },
    'support': {
        allowedCaps: ['msg_response', 'email_read', 'email_send', 'calls', 'pdf_read', 'web_chat'],
        allowedInts: ['zendesk', 'slack', 'gmail', 'outlook', 'whatsapp', 'messenger', 'instagram']
    },
    'booking': {
        allowedCaps: ['booking_manage', 'reminders', 'email_send', 'msg_response'],
        allowedInts: ['gcalendar', 'calendly', 'whatsapp', 'email', 'zoom', 'meet']
    },
    'content': {
        allowedCaps: ['copywriting', 'social_posts', 'img_gen', 'video_gen', 'rewrite', 'web_search'],
        allowedInts: ['instagram', 'wordpress', 'medium', 'youtube', 'linkedin', 'twitter', 'meta']
    },
    'analyst': {
        allowedCaps: ['report_gen', 'db_query', 'web_search', 'pdf_read', 'monitoring'],
        allowedInts: ['gsheets', 'googleads', 'meta', 'hubspot', 'salesforce', 'supabase']
    },
    'automation': {
        allowedCaps: ['api_integration', 'scheduled_tasks', 'monitoring', 'alerts', 'error_detect'],
        allowedInts: ['zapier', 'make', 'aws', 'google_cloud', 'slack', 'discord']
    }
};
