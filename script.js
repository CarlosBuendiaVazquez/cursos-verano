// ===== CONFIGURACIÓN DE CARRERAS Y MATERIAS CON SEMESTRES - PERÍODO ENE-JUN =====
const carrerasDataENEJUN = {
    'arquitectura': {
        nombre: 'Arquitectura',
        materias: [
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte II', semestre: 2, horas: 4 },
            { nombre: 'Fundamentos Teóricos del Diseño II', semestre: 2, horas: 4 },
            { nombre: 'Geometría Descriptiva II', semestre: 2, horas: 4 },
            { nombre: 'Matemáticas Aplicadas a la Arquitectura', semestre: 2, horas: 4 },
            { nombre: 'Metodología para el Diseño', semestre: 2, horas: 4 },
            { nombre: 'Taller de Lenguaje Arquitectónico I', semestre: 2, horas: 6 },
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte IV', semestre: 4, horas: 4 },
            { nombre: 'Estructuras II', semestre: 4, horas: 4 },
            { nombre: 'Instalaciones I', semestre: 4, horas: 4 },
            { nombre: 'Pensamiento Arquitectónico Contemporáneo', semestre: 4, horas: 4 },
            { nombre: 'Taller de Construcción I', semestre: 4, horas: 6 },
            { nombre: 'Taller de Diseño II', semestre: 4, horas: 8 },
            { nombre: 'Administración de la Construcción I', semestre: 6, horas: 4 },
            { nombre: 'Estructuras de Acero', semestre: 6, horas: 4 },
            { nombre: 'Taller de Diseño IV', semestre: 6, horas: 8 },
            { nombre: 'Taller de Investigación I', semestre: 6, horas: 4 },
            { nombre: 'Urbanismo I', semestre: 6, horas: 4 },
            { nombre: 'Administración de Empresas Constructoras I', semestre: 8, horas: 4 },
            { nombre: 'Gestión Urbanística', semestre: 8, horas: 4 },
            { nombre: 'Taller de Diseño VI', semestre: 8, horas: 8 },
            { nombre: 'Plan de Desarrollo Bioclimático y Sustentable', semestre: 8, horas: 5 },
            { nombre: 'Arquitectura Urbana Sustentable para Zonas Turísticas', semestre: 8, horas: 5 },
            { nombre: 'Sistemas de Automatizacion en Interiores', semestre: 8, horas: 5 }
        ]
    },
    'civil': {
        nombre: 'Ing. Civil',
        materias: [
            { nombre: 'Cálculo Integral', semestre: 2, horas: 5 },
            { nombre: 'Algebra lineal', semestre: 2, horas: 5 },
            { nombre: 'Geología', semestre: 2, horas: 4 },
            { nombre: 'Materiales y Procesos Constructivos', semestre: 2, horas: 4 },
            { nombre: 'Probabilidad y Estadística', semestre: 2, horas: 4 },
            { nombre: 'Topografía', semestre: 2, horas: 8 },
            { nombre: 'Dinámica', semestre: 4, horas: 5 },
            { nombre: 'Fundamentos de la Mecánica de los Medios Continuos', semestre: 4, horas: 4 },
            { nombre: 'Maquinaria Pesada y Movimiento de Tierra', semestre: 4, horas: 4 },
            { nombre: 'Mecánica de Suelos', semestre: 4, horas: 6 },
            { nombre: 'Modelos de Optimización de Recursos', semestre: 4, horas: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4, horas: 5 },
            { nombre: 'Administración de la Construcción', semestre: 6, horas: 4 },
            { nombre: 'Análisis Estructural', semestre: 6, horas: 5 },
            { nombre: 'Diseño y Construcción de Pavimentos', semestre: 6, horas: 6 },
            { nombre: 'Hidrología Superficial', semestre: 6, horas: 4 },
            { nombre: 'Hidráulica de Canales', semestre: 6, horas: 6 },
            { nombre: 'Instalaciones en los Edificios', semestre: 6, horas: 5 },
            { nombre: 'Alcantarillado', semestre: 8, horas: 4 },
            { nombre: 'Diseño Estructural de Cimentaciones', semestre: 8, horas: 4 },
            { nombre: 'Diseño de Elementos de Acero', semestre: 8, horas: 5 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8, horas: 4 },
            { nombre: 'Supervision y Control De Calidad en las Obras', semestre: 8, horas: 5 },
            { nombre: 'Instalaciones Espaciales en Edificios', semestre: 8, horas: 5 }
        ]
    },
    'electromecanica': {
        nombre: 'Ing. Electromecánica',
        materias: [
            { nombre: 'Probabilidad y Estadística', semestre: 2, horas: 4 },
            { nombre: 'Cálculo Integral', semestre: 2, horas: 5 },
            { nombre: 'Estática', semestre: 2, horas: 4 },
            { nombre: 'Metrología y Normalización', semestre: 2, horas: 4 },
            { nombre: 'Tecnología de los Materiales', semestre: 2, horas: 4 },
            { nombre: 'Desarollo Sustentable', semestre: 2, horas: 5 },
            { nombre: 'Análisis de Circuitos Eléctricos de CD', semestre: 4, horas: 5 },
            { nombre: 'Análisis y Síntesis de Mecanismos', semestre: 4, horas: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4, horas: 5 },
            { nombre: 'Mecánica de Materiales', semestre: 4, horas: 6 },
            { nombre: 'Diseño e Ingeniería Asistido por Computadora', semestre: 4, horas: 4 },
            { nombre: 'Termodinámica', semestre: 4, horas: 4 },
            { nombre: 'Administración y Técnicas de Mantenimiento', semestre: 6, horas: 6 },
            { nombre: 'Electrónica Digital', semestre: 6, horas: 4 },
            { nombre: 'Instalaciones Eléctricas', semestre: 6, horas: 5 },
            { nombre: 'Máquinas Eléctricas', semestre: 6, horas: 6 },
            { nombre: 'Máquinas y Equipos Térmicos I', semestre: 6, horas: 4 },
            { nombre: 'Sistemas y Maquinas de Fluido', semestre: 6, horas: 6 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8, horas: 4 },
            { nombre: 'Ingenieria de control clásico', semestre: 8, horas: 6 },
            { nombre: 'Sistemas Hidráulicos y Neumáticos de Potencia', semestre: 8, horas: 6 },
            { nombre: 'Subestaciones Eléctricas', semestre: 8, horas: 5 },
            { nombre: 'Sistemas Solares Fotovoltaicos y Térmicos', semestre: 8, horas: 5 }
        ]
    },
    'ferroviaria': {
        nombre: 'Ing. Ferroviaria',
        materias: [
            { nombre: 'Cálculo Integral', semestre: 2, horas: 5 },
            { nombre: 'Dibujo Asistido por Computadora', semestre: 2, horas: 4 },
            { nombre: 'Metrología y Normalización', semestre: 2, horas: 4 },
            { nombre: 'Probabilidad y Estadística', semestre: 2, horas: 4 },
            { nombre: 'Topografía para Vías Ferroviarias', semestre: 2, horas: 8 },
            { nombre: 'Álgebra Lineal', semestre: 2, horas: 5 },
            { nombre: 'Circuitos Eléctricos y Electrónicos', semestre: 4, horas: 5 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4, horas: 5 },
            { nombre: 'Innovación y Gestión del Conocimiento', semestre: 4, horas: 3 },
            { nombre: 'Métodos Numéricos', semestre: 4, horas: 4 },
            { nombre: 'Principios Básicos de Geotecnia', semestre: 4, horas: 6 },
            { nombre: 'Vibraciones Mecánicas', semestre: 4, horas: 5 },
            { nombre: 'Electrificación de Sistemas Ferroviarios', semestre: 6, horas: 8 },
            { nombre: 'Gestión de la Calidad del Servicio Ferroviario', semestre: 6, horas: 5 },
            { nombre: 'Instrumentación', semestre: 6, horas: 5 },
            { nombre: 'Logística Ferroviaria', semestre: 6, horas: 5 },
            { nombre: 'Material Rodante', semestre: 6, horas: 5 },
            { nombre: 'Supervisión y Control de Calidad de la Infraestructura Ferroviaria', semestre: 6, horas: 5 },
            { nombre: 'Automatización Ferroviaria', semestre: 8, horas: 5 },
            { nombre: 'Mantenimiento en Sistemas Ferroviarias', semestre: 8, horas: 5 }
        ]
    },
    'mecatronica': {
        nombre: 'Ing. Mecatrónica',
        materias: [
            { nombre: 'Administración y Contabilidad', semestre: 2, horas: 4 },
            { nombre: 'Ciencia e Ingeniería de Materiales', semestre: 2, horas: 5 },
            { nombre: 'Cálculo Integral', semestre: 2, horas: 5 },
            { nombre: 'Estadística y Control de Calidad', semestre: 2, horas: 4 },
            { nombre: 'Programación Básica', semestre: 2, horas: 5 },
            { nombre: 'Álgebra lineal', semestre: 2, horas: 5 },
            { nombre: 'Análisis de Circuitos Eléctricos', semestre: 4, horas: 6 },
            { nombre: 'Dinámica', semestre: 4, horas: 4 },
            { nombre: 'Ecuaciones Diferenciales', semestre: 4, horas: 5 },
            { nombre: 'Fundamentos de Termodinámica', semestre: 4, horas: 4 },
            { nombre: 'Mecánica de Materiales', semestre: 4, horas: 6 },
            { nombre: 'Diseño de Elementos Mecánicos', semestre: 6, horas: 5 },
            { nombre: 'Electrónica Digital', semestre: 6, horas: 5 },
            { nombre: 'Electrónica de Potencia Aplicada', semestre: 6, horas: 6 },
            { nombre: 'Instrumentación', semestre: 6, horas: 5 },
            { nombre: 'Taller de Investigación II', semestre: 6, horas: 4 },
            { nombre: 'Vibraciones Mecánicas', semestre: 6, horas: 5 },
            { nombre: 'Control', semestre: 8, horas: 6 },
            { nombre: 'Controladores Lógicos Programables', semestre: 8, horas: 5 },
            { nombre: 'Formulación y Evaluación de Proyectos', semestre: 8, horas: 3 },
            { nombre: 'Procesamiento Digital de Señales I', semestre: 8, horas: 5 },
            { nombre: 'IOT e Industria 4.0', semestre: 8, horas: 5 },
            { nombre: 'Analisis de Costos Mecatrónicos', semestre: 8, horas: 5 }
        ]
    }
};

// ===== CONFIGURACIÓN DE CARRERAS Y MATERIAS CON SEMESTRES - PERÍODO AGO-DIC =====
const carrerasDataAGODIC = {
    'arquitectura': {
        nombre: 'Arquitectura',
        materias: [
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte I', semestre: 1, horas: 4 },
            { nombre: 'Análisis Proyectual', semestre: 1, horas: 4 },
            { nombre: 'Fundamentos Teóricos del Diseño I', semestre: 1, horas: 4 },
            { nombre: 'Fundamentos de Investigación', semestre: 1, horas: 4 },
            { nombre: 'Geometría Descriptiva I', semestre: 1, horas: 4 },
            { nombre: 'Taller de Expresión Plástica', semestre: 1, horas: 6 },
            { nombre: 'Análisis Crítico de la Arquitectura y el Arte III', semestre: 3, horas: 4 },
            { nombre: 'Estructuras I', semestre: 3, horas: 4 },
            { nombre: 'Propiedades y Comportamiento de los Materiales', semestre: 3, horas: 4 },
            { nombre: 'Taller de Diseño I', semestre: 3, horas: 6 },
            { nombre: 'Taller de Lenguaje Arquitectónico II', semestre: 3, horas: 6 },
            { nombre: 'Topografía', semestre: 3, horas: 4 },
            { nombre: 'Desarrollo Sustentable', semestre: 5, horas: 5 },
            { nombre: 'Estructuras de Concreto', semestre: 5, horas: 6 },
            { nombre: 'Estética', semestre: 5, horas: 3 },
            { nombre: 'Instalaciones II', semestre: 5, horas: 4 },
            { nombre: 'Taller de Construcción II', semestre: 5, horas: 6 },
            { nombre: 'Taller de Diseño III', semestre: 5, horas: 8 },
            { nombre: 'Administración de la Construcción II', semestre: 7, horas: 4 },
            { nombre: 'Taller de Diseño V', semestre: 7, horas: 8 },
            { nombre: 'Taller de Investigación II', semestre: 7, horas: 4 },
            { nombre: 'Taller de Ética', semestre: 7, horas: 4 },
            { nombre: 'Urbanismo II', semestre: 7, horas: 4 },
            { nombre: 'Administración de Empresas Constructoras II', semestre: 9, horas: 4 },
            { nombre: 'Plan de Negocios en arquitectura', semestre: 9, horas: 5 },
            { nombre: 'Desarrollo de un Diseño Urbano Arquitectónico', semestre: 9, horas: 5 }
        ]
    },
    'civil': {
        nombre: 'Ing. Civil',
        materias: [
            { nombre: 'Cálculo Diferencial', semestre: 1, horas: 5 },
            { nombre: 'Dibujo en Ingeniería Civil', semestre: 1, horas: 6 },
            { nombre: 'Fundamentos de Investigación', semestre: 1, horas: 4 },
            { nombre: 'Química', semestre: 1, horas: 4 },
            { nombre: 'Software en Ingeniería Civil', semestre: 1, horas: 4 },
            { nombre: 'Taller de Ética', semestre: 1, horas: 4 },
            { nombre: 'Carreteras', semestre: 3, horas: 6 },
            { nombre: 'Desarrollo Sustentable', semestre: 3, horas: 5 },
            { nombre: 'Estática', semestre: 3, horas: 5 },
            { nombre: 'Sistemas de Transporte', semestre: 3, horas: 4 },
            { nombre: 'Tecnología del Concreto', semestre: 3, horas: 4 },
            { nombre: 'Cálculo Vectorial', semestre: 3, horas: 5 },
            { nombre: 'Costos y Presupuestos', semestre: 5, horas: 4 },
            { nombre: 'Métodos Numéricos', semestre: 5, horas: 4 },
            { nombre: 'Hidráulica Básica', semestre: 5, horas: 6 },
            { nombre: 'Mecánica de Materiales', semestre: 5, horas: 5 },
            { nombre: 'Mecánica de Suelos Aplicada', semestre: 5, horas: 6 },
            { nombre: 'Taller de Investigación I', semestre: 5, horas: 4 },
            { nombre: 'Abastecimiento de Agua', semestre: 7, horas: 6 },
            { nombre: 'Análisis Estructural Avanzado', semestre: 7, horas: 5 },
            { nombre: 'Diseño de Elementos de Concreto Reforzado', semestre: 7, horas: 5 },
            { nombre: 'Taller de Investigación II', semestre: 7, horas: 4 },
            { nombre: 'Planificacion Urbana', semestre: 9, horas: 5 },
            { nombre: 'Diseños de Plantas de Tratamiento de Aguas Residuales', semestre: 9, horas: 5 },
            { nombre: 'Diseño Estructural', semestre: 9, horas: 5 }
        ]
    },
    'electromecanica': {
        nombre: 'Ing. Electromecánica',
        materias: [
            { nombre: 'Algebra Lineal', semestre: 1, horas: 5 },
            { nombre: 'Cálculo Diferencial', semestre: 1, horas: 5 },
            { nombre: 'Fundamentos de Investigación', semestre: 1, horas: 4 },
            { nombre: 'Introducción a la Programación', semestre: 1, horas: 4 },
            { nombre: 'Química', semestre: 1, horas: 4 },
            { nombre: 'Taller de Ética', semestre: 1, horas: 4 },
            { nombre: 'Cálculo Vectorial', semestre: 3, horas: 5 },
            { nombre: 'Dinámica', semestre: 3, horas: 4 },
            { nombre: 'Electricidad y Magnetismo', semestre: 3, horas: 4 },
            { nombre: 'Dibujo Electromecánico', semestre: 3, horas: 5 },
            { nombre: 'Taller de Investigacion I', semestre: 3, horas: 4 },
            { nombre: 'Procesos de Manufactura', semestre: 3, horas: 4 },
            { nombre: 'Análisis de Circuitos Eléctricos de CA', semestre: 5, horas: 5 },
            { nombre: 'Diseño de Elementos de Máquinas', semestre: 5, horas: 5 },
            { nombre: 'Electrónica Analógica', semestre: 5, horas: 5 },
            { nombre: 'Mecánica de Fluidos', semestre: 5, horas: 4 },
            { nombre: 'Taller de Investigacion II', semestre: 5, horas: 4 },
            { nombre: 'Transferencia de Calor', semestre: 5, horas: 4 },
            { nombre: 'Controles Eléctricos', semestre: 7, horas: 5 },
            { nombre: 'Refrigeracion y Aire Acondicionado', semestre: 7, horas: 5 },
            { nombre: 'Máquinas y Equipos Térmicos II', semestre: 7, horas: 4 },
            { nombre: 'Sistemas Eléctricos de Potencia', semestre: 7, horas: 5 },
            { nombre: 'Marco Legal en la Gestión Energética', semestre: 7, horas: 5 },
            { nombre: 'Fuentes Alternas de Energía', semestre: 7, horas: 5 },
            { nombre: 'Energia Eolica', semestre: 9, horas: 5 },
            { nombre: 'Biocombustibles', semestre: 9, horas: 5 },
            { nombre: 'Ahorro de Energía', semestre: 9, horas: 6 }
        ]
    },
    'ferroviaria': {
        nombre: 'Ing. Ferroviaria',
        materias: [
            { nombre: 'Desarrollo Sustentable', semestre: 1, horas: 5 },
            { nombre: 'Cálculo Diferencial', semestre: 1, horas: 5 },
            { nombre: 'Fundamentos de Investigación', semestre: 1, horas: 4 },
            { nombre: 'Introducción a la Ingeniería Ferroviaria', semestre: 1, horas: 3 },
            { nombre: 'Introducción a la Programación', semestre: 1, horas: 4 },
            { nombre: 'Taller de Ética', semestre: 1, horas: 4 },
            { nombre: 'Ciencia e Ingeniería de los Materiales', semestre: 3, horas: 5 },
            { nombre: 'Cálculo Vectorial', semestre: 3, horas: 5 },
            { nombre: 'Electromagnetismo', semestre: 3, horas: 5 },
            { nombre: 'Gestión Ambiental Ferroviaria', semestre: 3, horas: 4 },
            { nombre: 'Introducción a la Administración y Economía', semestre: 3, horas: 4 },
            { nombre: 'Mecánica Clásica', semestre: 3, horas: 5 },
            { nombre: 'Circuitos Electrónicos de Potencia', semestre: 5, horas: 5 },
            { nombre: 'Diseño Mecánico I', semestre: 5, horas: 5 },
            { nombre: 'Ferrocarriles', semestre: 5, horas: 5 },
            { nombre: 'Fundamentos de Telecomunicaciones', semestre: 5, horas: 4 },
            { nombre: 'Geotecnia Aplicada a la Infraestructura Ferroviaria', semestre: 5, horas: 6 },
            { nombre: 'Taller de Investigación I', semestre: 5, horas: 4 },
            { nombre: 'Fundamentos de Información Financiera', semestre: 7, horas: 3 },
            { nombre: 'Sistemas Neumáticos Ferroviarios', semestre: 7, horas: 4 },
            { nombre: 'Sistemas de Señalización y Control', semestre: 7, horas: 5 },
            { nombre: 'Sistemas de Tracción y de Frenado', semestre: 7, horas: 6 },
            { nombre: 'Taller de Investigación II', semestre: 7, horas: 4 }
        ]
    },
    'mecatronica': {
        nombre: 'Ing. Mecatrónica',
        materias: [
            { nombre: 'Cálculo Diferencial', semestre: 1, horas: 5 },
            { nombre: 'Dibujo Asistido por Computadora', semestre: 1, horas: 4 },
            { nombre: 'Fundamentos de investigación', semestre: 1, horas: 4 },
            { nombre: 'Metrológia y Normalización', semestre: 1, horas: 4 },
            { nombre: 'Química', semestre: 1, horas: 4 },
            { nombre: 'Taller de Ética', semestre: 1, horas: 4 },
            { nombre: 'Cálculo Vectorial', semestre: 3, horas: 5 },
            { nombre: 'Desarrollo Sustentable', semestre: 3, horas: 5 },
            { nombre: 'Electromagnetismo', semestre: 3, horas: 5 },
            { nombre: 'Estática', semestre: 3, horas: 4 },
            { nombre: 'Métodos Numéricos', semestre: 3, horas: 4 },
            { nombre: 'Procesos de Fabricación', semestre: 3, horas: 4 },
            { nombre: 'Análisis de Fluidos', semestre: 5, horas: 4 },
            { nombre: 'Electrónica Analógica', semestre: 5, horas: 6 },
            { nombre: 'Mecanismos', semestre: 5, horas: 5 },
            { nombre: 'Máquinas Eléctricas', semestre: 5, horas: 5 },
            { nombre: 'Taller de Investigación I', semestre: 5, horas: 4 },
            { nombre: 'Circuitos Hidráulicos y Neumáticos', semestre: 7, horas: 6 },
            { nombre: 'Dinámica de Sistemas', semestre: 7, horas: 5 },
            { nombre: 'Mantenimiento', semestre: 7, horas: 5 },
            { nombre: 'Manufactura Avanzada', semestre: 7, horas: 5 },
            { nombre: 'Microcontroladores', semestre: 7, horas: 5 },
            { nombre: 'Programación Avanzada', semestre: 7, horas: 6 },
            { nombre: 'Robótica', semestre: 9, horas: 5 },
            { nombre: 'Procesamiento Digital de Señales 2', semestre: 9, horas: 5 },
            { nombre: 'Control Neurodifuso Aplicado', semestre: 9, horas: 5 }
        ]
    },
    'maestria_ambiental': {
        nombre: 'Maestría en Ciencias Ambientales',
        materias: [
            { nombre: 'Seminario de Investigación 1', semestre: 1, horas: 4 },
            { nombre: 'Desarrollo Sustentable (Maestría)', semestre: 1, horas: 6 },
            { nombre: 'Diseño y análisis de Experimentos', semestre: 1, horas: 6 },
            { nombre: 'Fundamentos de Ingeniería Ambiental', semestre: 1, horas: 6 },
            { nombre: 'Experimentación Analítica Ambiental', semestre: 1, horas: 6 },
            { nombre: 'Seminario de investigación 3', semestre: 3, horas: 4 },
            { nombre: 'Temas selectos', semestre: 3, horas: 6 }
        ]
    },
    'maestria_negocios': {
        nombre: 'Maestría en Administración de Negocios',
        materias: [
            { nombre: 'Seminario 1', semestre: 1, horas: 4 },
            { nombre: 'Fundamentos de Administración', semestre: 1, horas: 6 },
            { nombre: 'Administración Financiera', semestre: 1, horas: 6 },
            { nombre: 'Análisis y Estrategias para la Competitividad Empresarial', semestre: 1, horas: 6 },
            { nombre: 'Seminario 3', semestre: 3, horas: 4 },
            { nombre: 'Entorno Económico de las Organizaciones', semestre: 3, horas: 6 },
            { nombre: 'Gestión de la Innovación y la Tecnología', semestre: 3, horas: 6 }
        ]
    },
    'doctorado_ambiental': {
        nombre: 'Doctorado en Ciencias Ambientales',
        materias: [
            { nombre: 'Seminario de Investigación', semestre: 1, horas: 16 },
            { nombre: 'Seminario predoctoral', semestre: 1, horas: 8 },
            { nombre: 'Proyectos de Investigación 2', semestre: 3, horas: 16 }
        ]
    }
};

// ===== VARIABLES GLOBALES =====
let carrerasData = carrerasDataENEJUN;
let datosProfesor = {
    nombre: '',
    correo: '',
    telefono: '',
    codigo: '',
    tipoPlaza: '',
    horasPlaza: ''
};

let materiasSeleccionadas = [];
let horariosSeleccionados = [];
let filtroCarreraActual = '';
let filtroSemestreActual = '';
let materiaSeleccionadaTemp = null;
let turnoActivo = 'matutino';
let periodoActivo = 'ene-jun';
let adminActivo = false;
let botonAdmin = null;
let accesoURLValido = false;
let yaPregunteEstaCombinacion = false;
let bloqueado = false;
let ultimaPreguntaEncuesta = null;
let todasLasMaterias = [];

// ===== VARIABLES PARA FILTROS EN GESTIÓN =====
let filtroGestionMaterias = '';
let filtroGestionCarrera = '';
let materiasGestionOriginal = [];
let filtroGestionProfesores = '';

// ===== CONFIGURACIÓN VERSIÓN VERANO =====
const ES_VERANO = true;
const COLECCION_INSCRIPCIONES = ES_VERANO ? 'inscripciones_verano' : 'encuestas';
const COLECCION_CATALOGO = ES_VERANO ? 'cursos_verano_catalogo' : null;

// ===== FUNCIONES DE VALIDACIÓN =====
function soloLetras(e) {
    const char = String.fromCharCode(e.keyCode);
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(char)) {
        e.preventDefault();
        return false;
    }
    return true;
}

function soloNumeros(e) {
    const char = String.fromCharCode(e.keyCode);
    if(!/^[0-9]+$/.test(char)) {
        e.preventDefault();
        return false;
    }
    return true;
}

function validarEmail(email) {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// ===== SISTEMA DE BACKUPS AUTOMÁTICOS =====
const BackupSystem = {
    colecciones: ['encuestas', 'profesores', 'materias_enejun', 'materias_agodic', 'config'],
    
    realizarBackup: async function() {
        try {
            mostrarNotificacion('📦 Realizando backup...', 'info');
            
            const backupData = {};
            let totalRegistros = 0;
            
            for (const coleccion of this.colecciones) {
                try {
                    const records = await pb.collection(coleccion).getFullList({
                        sort: '-created',
                        requestKey: null
                    });
                    
                    backupData[coleccion] = records.map(r => {
                        const { '@collectionId': cid, '@collectionName': cn, ...data } = r;
                        return data;
                    });
                    
                    totalRegistros += records.length;
                    console.log(`✅ ${coleccion}: ${records.length} registros`);
                } catch (e) {
                    console.warn(`⚠️ No se pudo respaldar ${coleccion}:`, e);
                    backupData[coleccion] = [];
                }
            }
            
            backupData.metadata = {
                fecha: new Date().toISOString(),
                timestamp: Date.now(),
                version: '1.0',
                totalRegistros: totalRegistros,
                colecciones: this.colecciones
            };
            
            localStorage.setItem('ultimo_backup_info', JSON.stringify({
                fecha: backupData.metadata.fecha,
                totalRegistros: totalRegistros
            }));
            
            this.descargarBackup(backupData);
            
            mostrarNotificacion(`✅ Backup completado: ${totalRegistros} registros`, 'success');
            
            return backupData;
            
        } catch (error) {
            console.error('❌ Error en backup:', error);
            mostrarNotificacion('Error al realizar backup', 'error');
            return null;
        }
    },
    
    descargarBackup: function(data) {
        const fecha = new Date().toISOString().split('T')[0];
        const hora = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
        const nombreArchivo = `backup_itc_${fecha}_${hora}.json`;
        
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = nombreArchivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('📥 Archivo descargado:', nombreArchivo);
    },
    
    restaurarBackup: async function(archivoJSON) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = async (e) => {
                try {
                    mostrarNotificacion('🔄 Restaurando backup...', 'info');
                    
                    const backupData = JSON.parse(e.target.result);
                    
                    if (!backupData.metadata || !backupData.metadata.fecha) {
                        throw new Error('El archivo no parece ser un backup válido');
                    }
                    
                    if (!confirm(`¿Restaurar ${backupData.metadata.totalRegistros} registros?\n\nEsta acción NO se puede deshacer.`)) {
                        resolve(false);
                        return;
                    }
                    
                    let totalRestaurados = 0;
                    let totalErrores = 0;
                    
                    for (const coleccion of this.colecciones) {
                        if (backupData[coleccion] && backupData[coleccion].length > 0) {
                            try {
                                const eliminarExistentes = confirm(`¿Eliminar los registros actuales de "${coleccion}" antes de restaurar?`);
                                
                                if (eliminarExistentes) {
                                    try {
                                        const existentes = await pb.collection(coleccion).getFullList();
                                        for (const reg of existentes) {
                                            await pb.collection(coleccion).delete(reg.id);
                                        }
                                        console.log(`🗑️ ${existentes.length} registros eliminados de ${coleccion}`);
                                    } catch (e) {
                                        console.warn(`⚠️ No se pudieron eliminar registros de ${coleccion}:`, e);
                                    }
                                }
                                
                                for (const registro of backupData[coleccion]) {
                                    try {
                                        await pb.collection(coleccion).create(registro);
                                        totalRestaurados++;
                                    } catch (e) {
                                        totalErrores++;
                                        console.warn(`⚠️ Error insertando en ${coleccion}:`, e);
                                    }
                                }
                                console.log(`✅ ${coleccion} restaurada: ${backupData[coleccion].length} registros`);
                            } catch (e) {
                                console.warn(`⚠️ Error restaurando ${coleccion}:`, e);
                            }
                        }
                    }
                    
                    if (totalErrores > 0) {
                        mostrarNotificacion(`⚠️ Restauración con errores: ${totalRestaurados} ok, ${totalErrores} fallos`, 'warning');
                    } else {
                        mostrarNotificacion(`✅ Restauración completa: ${totalRestaurados} registros`, 'success');
                    }
                    
                    resolve(true);
                    
                } catch (error) {
                    console.error('❌ Error al restaurar:', error);
                    mostrarNotificacion('Error al restaurar backup: ' + error.message, 'error');
                    reject(error);
                }
            };
            
            reader.readAsText(archivoJSON);
        });
    },
    
    iniciarBackupAutomatico: function() {
        if (window.backupInterval) {
            clearInterval(window.backupInterval);
        }
        
        window.backupInterval = setInterval(() => {
            console.log('⏰ Ejecutando backup automático programado...');
            
            if (adminActivo) {
                this.realizarBackup();
            } else {
                console.log('⏸️ Backup automático omitido (admin no activo)');
            }
        }, 86400000);
        
        console.log('✅ Backup automático programado (cada 24 horas)');
        
        return window.backupInterval;
    },
    
    detenerBackupAutomatico: function() {
        if (window.backupInterval) {
            clearInterval(window.backupInterval);
            window.backupInterval = null;
            console.log('🛑 Backup automático detenido');
        }
    },
    
    mostrarModalRestauracion: function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.style.display = 'none';
        
        input.onchange = (e) => {
            const archivo = e.target.files[0];
            if (archivo) {
                if (confirm(`¿Restaurar desde el archivo "${archivo.name}"?\n\nEsta acción puede sobrescribir datos existentes.`)) {
                    this.restaurarBackup(archivo);
                }
            }
        };
        
        document.body.appendChild(input);
        input.click();
        
        setTimeout(() => {
            document.body.removeChild(input);
        }, 1000);
    },
    
    obtenerInfoUltimoBackup: function() {
        const info = localStorage.getItem('ultimo_backup_info');
        return info ? JSON.parse(info) : null;
    },
    
    limpiarBackupsAntiguos: function(dias = 7) {
        try {
            const keys = Object.keys(localStorage);
            const fechaLimite = Date.now() - (dias * 24 * 60 * 60 * 1000);
            let eliminados = 0;
            
            keys.forEach(key => {
                if (key.startsWith('backup_')) {
                    try {
                        const backup = JSON.parse(localStorage.getItem(key));
                        if (backup.timestamp && backup.timestamp < fechaLimite) {
                            localStorage.removeItem(key);
                            eliminados++;
                        }
                    } catch (e) {
                        if (key.includes('backup_')) {
                            localStorage.removeItem(key);
                            eliminados++;
                        }
                    }
                }
            });
            
            console.log(`🧹 ${eliminados} backups antiguos eliminados`);
        } catch (e) {
            console.warn('⚠️ Error limpiando backups:', e);
        }
    }
};

// ===== SISTEMA DE CACHÉ INTELIGENTE =====
const Cache = {
    _data: {},
    
    _ttls: {
        materias: 3600000,
        profesores: 7200000,
        config: 300000,
        encuestas: 300000
    },
    
    set: function(key, data, ttl = 3600000) {
        this._data[key] = {
            data: data,
            timestamp: Date.now(),
            ttl: ttl
        };
    },
    
    get: function(key) {
        const item = this._data[key];
        if (!item) return null;
        
        const ahora = Date.now();
        if (ahora - item.timestamp > item.ttl) {
            delete this._data[key];
            return null;
        }
        
        return item.data;
    },
    
    clear: function(key) {
        delete this._data[key];
    },
    
    clearAll: function() {
        this._data = {};
    }
};

// ===== CACHÉ PARA BÚSQUEDAS DE ENCUESTAS =====
const EncuestaCache = {
    _cache: {},
    
    get: function(nombre, correo, clave) {
        const key = `${nombre}_${correo}_${clave}`;
        const item = this._cache[key];
        
        if (item && (Date.now() - item.timestamp) < 300000) {
            return item.data;
        }
        return null;
    },
    
    set: function(nombre, correo, clave, data) {
        const key = `${nombre}_${correo}_${clave}`;
        this._cache[key] = {
            data: data,
            timestamp: Date.now()
        };
    },
    
    clear: function(nombre, correo, clave) {
        const key = `${nombre}_${correo}_${clave}`;
        delete this._cache[key];
    }
};

// ===== SISTEMA DE BORRADOR AUTOMÁTICO =====
const BORRADOR_KEY = 'encuesta_borrador';
let autoSaveInterval = null;

function guardarBorrador() {
    if (!datosProfesor.nombre && !datosProfesor.correo && 
        materiasSeleccionadas.length === 0 && horariosSeleccionados.length === 0) {
        return;
    }
    
    try {
        const borrador = {
            profesor: { 
                nombre: datosProfesor.nombre || '',
                correo: datosProfesor.correo || '',
                telefono: datosProfesor.telefono || '',
                codigo: datosProfesor.codigo || '',
                tipoPlaza: datosProfesor.tipoPlaza || '',
                horasPlaza: datosProfesor.horasPlaza || ''
            },
            materias: materiasSeleccionadas.map(m => ({...m})),
            horarios: horariosSeleccionados.map(h => ({...h})),
            timestamp: Date.now(),
            periodo: periodoActivo
        };
        
        localStorage.setItem(BORRADOR_KEY, JSON.stringify(borrador));
    } catch (e) {
        console.error('❌ Error guardando borrador:', e);
    }
}

async function aplicarBorrador(borrador) {
    if (!borrador) return;
    
    if (borrador.profesor) {
        datosProfesor = { ...borrador.profesor };
        
        const nombreInput = document.getElementById('nombreProfesor');
        const buscador = document.getElementById('buscadorProfesores');
        const correo = document.getElementById('correoProfesor');
        const telefono = document.getElementById('telefonoProfesor');
        const codigo = document.getElementById('codigoProfesor');
        const selectPlaza = document.getElementById('tipoPlaza');
        const horasContainer = document.getElementById('horasPlazaContainer');
        const inputHoras = document.getElementById('horasPlaza');
        
        if (nombreInput) nombreInput.value = datosProfesor.nombre || '';
        if (buscador) buscador.value = datosProfesor.nombre || '';
        if (correo) correo.value = datosProfesor.correo || '';
        if (telefono) telefono.value = datosProfesor.telefono || '';
        if (codigo) codigo.value = datosProfesor.codigo || '';
        
        if (selectPlaza && datosProfesor.tipoPlaza) {
            selectPlaza.value = datosProfesor.tipoPlaza;
            
            if (datosProfesor.tipoPlaza === 'por_horas') {
                if (horasContainer) horasContainer.style.display = 'flex';
                if (inputHoras && datosProfesor.horasPlaza) {
                    inputHoras.value = datosProfesor.horasPlaza;
                }
            } else {
                if (horasContainer) horasContainer.style.display = 'none';
            }
        }
    }
    
    if (borrador.materias && borrador.materias.length > 0) {
        materiasSeleccionadas = borrador.materias.map(m => ({...m}));
        renderizarMaterias();
        actualizarContadorMaterias();
    }
    
    if (borrador.horarios && borrador.horarios.length > 0) {
        horariosSeleccionados = borrador.horarios.map(h => ({...h}));
        restaurarHorariosSeleccionados();
    }
}

function cargarBorrador() {
    try {
        const borradorGuardado = localStorage.getItem(BORRADOR_KEY);
        if (!borradorGuardado) return null;
        
        return JSON.parse(borradorGuardado);
    } catch (e) {
        console.error('❌ Error al leer borrador:', e);
        return null;
    }
}

function eliminarBorrador() {
    localStorage.removeItem(BORRADOR_KEY);
    console.log('🗑️ Borrador eliminado');
}

function mostrarModalBorrador(borrador) {
    const modal = document.getElementById('borradorModal');
    if (!modal) return;
    
    document.getElementById('borradorProfesor').textContent = borrador.profesor?.nombre || 'No especificado';
    document.getElementById('borradorMaterias').textContent = borrador.materias?.length || 0;
    document.getElementById('borradorHorarios').textContent = borrador.horarios?.length || 0;
    
    if (borrador.timestamp) {
        const fecha = new Date(borrador.timestamp);
        document.getElementById('borradorFecha').textContent = fecha.toLocaleDateString('es-MX') + ' ' + 
                                fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
    }
    
    modal.style.display = 'flex';
}

function configurarBotonesBorrador() {
    const modal = document.getElementById('borradorModal');
    const btnRecuperar = document.getElementById('btnRecuperarBorrador');
    const btnDescartar = document.getElementById('btnDescartarBorrador');
    const btnCerrar = document.getElementById('cerrarBorradorBtn');
    
    if (btnRecuperar) {
        btnRecuperar.onclick = function(e) {
            e.preventDefault();
            const borrador = cargarBorrador();
            if (borrador) {
                aplicarBorrador(borrador);
                if (modal) modal.style.display = 'none';
            }
        };
    }
    
    if (btnDescartar) {
        btnDescartar.onclick = function(e) {
            e.preventDefault();
            eliminarBorrador();
            if (modal) modal.style.display = 'none';
            mostrarNotificacion('🗑️ Borrador descartado', 'info');
        };
    }
    
    if (btnCerrar) {
        btnCerrar.onclick = function(e) {
            e.preventDefault();
            if (modal) modal.style.display = 'none';
        };
    }
    
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// ===== CONEXIÓN A POCKETBASE =====
const POCKETBASE_URL = 'https://encuestas-profesores-pb.fly.dev';
let pb;

try {
    pb = new PocketBase(POCKETBASE_URL);
    pb.autoCancellation(false);
} catch (error) {
    console.error('❌ Error conectando a PocketBase:', error);
}

// ===== FUNCIONES PARA PERÍODO GLOBAL =====
async function obtenerPeriodoGlobal() {
    try {
        const records = await pb.collection('config').getList(1, 1, {
            filter: 'key = "periodo_activo"'
        });
        return records.items.length > 0 ? records.items[0].value : 'ene-jun';
    } catch (error) {
        console.error('❌ Error obteniendo período:', error);
        return 'ene-jun';
    }
}

async function guardarPeriodoGlobal(nuevoPeriodo) {
    if (!adminActivo) return false;
    
    try {
        let records;
        try {
            records = await pb.collection('config').getList(1, 1, {
                filter: 'key = "periodo_activo"'
            });
        } catch (listError) {
            if (listError.status === 404) {
                mostrarNotificacion('La colección "config" no existe. Créala en PocketBase', 'error');
                return false;
            }
            throw listError;
        }
        
        if (records.items.length > 0) {
            await pb.collection('config').update(records.items[0].id, {
                value: nuevoPeriodo
            });
        } else {
            await pb.collection('config').create({
                key: 'periodo_activo',
                value: nuevoPeriodo
            });
        }
        
        periodoActivo = nuevoPeriodo;
        actualizarInterfazPeriodo();
        actualizarOpcionesSemestre();
        
        if (nuevoPeriodo === 'ene-jun') {
            carrerasData = carrerasDataENEJUNTrabajo;
        } else {
            carrerasData = carrerasDataAGODICTrabajo;
        }
        todasLasMaterias = generarListaGlobalMaterias();
        
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
        
        const btnENEJUN = document.getElementById('periodoENEJUN');
        const btnAGODIC = document.getElementById('periodoAGODIC');
        
        if (nuevoPeriodo === 'ene-jun') {
            btnENEJUN?.classList.add('active');
            btnAGODIC?.classList.remove('active');
        } else {
            btnAGODIC?.classList.add('active');
            btnENEJUN?.classList.remove('active');
        }
        
        return true;
        
    } catch (error) {
        console.error('❌ Error guardando período global:', error);
        mostrarNotificacion('Error al guardar el período', 'error');
        return false;
    }
}

function actualizarInterfazPeriodo() {
    const periodoBadge = document.getElementById('periodoBadge');
    const periodoDisplay = document.getElementById('periodoActualDisplay');
    const textoPeriodo = periodoActivo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC';
    
    if (periodoBadge) periodoBadge.textContent = textoPeriodo;
    if (periodoDisplay) periodoDisplay.textContent = textoPeriodo;
    
    actualizarOpcionesSemestre();
}

// ===== FUNCIONES PARA MATERIAS GLOBALES =====
async function guardarCarreraENEJUN(carreraKey) {
    if (!adminActivo) return false;
    
    try {
        const carreraData = carrerasDataENEJUNTrabajo[carreraKey];
        const recordId = `enejun_${carreraKey}`;
        
        const records = await pb.collection('materias_enejun').getList(1, 1, {
            filter: `recordId = "${recordId}"`
        });
        
        const data = {
            recordId: recordId,
            carrera: carreraKey,
            nombreCarrera: carreraData.nombre,
            materias: carreraData.materias
        };
        
        if (records.items.length > 0) {
            await pb.collection('materias_enejun').update(records.items[0].id, data);
        } else {
            await pb.collection('materias_enejun').create(data);
        }
        return true;
    } catch (error) {
        console.error(`❌ Error guardando carrera ${carreraKey}:`, error);
        return false;
    }
}

async function guardarCarreraAGODIC(carreraKey) {
    if (!adminActivo) return false;
    
    try {
        const carreraData = carrerasDataAGODICTrabajo[carreraKey];
        const recordId = `agodic_${carreraKey}`;
        
        const records = await pb.collection('materias_agodic').getList(1, 1, {
            filter: `recordId = "${recordId}"`
        });
        
        const data = {
            recordId: recordId,
            carrera: carreraKey,
            nombreCarrera: carreraData.nombre,
            materias: carreraData.materias
        };
        
        if (records.items.length > 0) {
            await pb.collection('materias_agodic').update(records.items[0].id, data);
        } else {
            await pb.collection('materias_agodic').create(data);
        }
        return true;
    } catch (error) {
        console.error(`❌ Error guardando carrera ${carreraKey}:`, error);
        return false;
    }
}

async function guardarMateriasENEJUN() {
    let todasExitosas = true;
    for (const carreraKey of Object.keys(carrerasDataENEJUNTrabajo)) {
        const exito = await guardarCarreraENEJUN(carreraKey);
        if (!exito) todasExitosas = false;
    }
    return todasExitosas;
}

async function guardarMateriasAGODIC() {
    let todasExitosas = true;
    for (const carreraKey of Object.keys(carrerasDataAGODICTrabajo)) {
        const exito = await guardarCarreraAGODIC(carreraKey);
        if (!exito) todasExitosas = false;
    }
    return todasExitosas;
}

async function cargarMateriasGlobales() {
    console.log('📚 Cargando catálogo de cursos de verano...');
    
    carrerasDataENEJUNTrabajo = {};
    carrerasDataAGODICTrabajo = {};
    
    try {
        let records = [];
        try {
            records = await pb.collection('cursos_verano_catalogo').getFullList();
            console.log(`📦 ${records.length} cursos encontrados en catálogo`);
        } catch (e) {
            console.log('⚠️ Colección cursos_verano_catalogo no encontrada, usando respaldo local');
        }
        
        if (records.length > 0) {
            records.forEach(record => {
                record.carreras.forEach(carreraInfo => {
                    const carreraKey = carreraInfo.carrera.toLowerCase().replace(/\s+/g, '_');
                    const semestre = carreraInfo.semestre;
                    const periodo = semestre % 2 === 0 ? 'ene-jun' : 'ago-dic';
                    const targetData = periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
                    
                    if (!targetData[carreraKey]) {
                        targetData[carreraKey] = {
                            nombre: carreraInfo.carrera,
                            materias: []
                        };
                    }
                    
                    targetData[carreraKey].materias.push({
                        nombre: record.nombre,
                        semestre: semestre,
                        horas: carreraInfo.horas || record.horas
                    });
                });
            });
        } else {
            Object.assign(carrerasDataENEJUNTrabajo, carrerasDataENEJUNOriginal);
            Object.assign(carrerasDataAGODICTrabajo, carrerasDataAGODICOriginal);
        }
        
        return true;
    } catch (error) {
        console.error('❌ Error cargando catálogo:', error);
        Object.assign(carrerasDataENEJUNTrabajo, carrerasDataENEJUNOriginal);
        Object.assign(carrerasDataAGODICTrabajo, carrerasDataAGODICOriginal);
        return false;
    }
}

async function cargarProfesoresGlobales() {
    const profesoresCached = Cache.get('profesores');
    if (profesoresCached) {
        profesoresDB.length = 0;
        profesoresDB.push(...profesoresCached);
        return true;
    }
    
    try {
        const records = await pb.collection('profesores').getFullList({ sort: 'nombre' });
        
        if (records.length > 0) {
            profesoresDB.length = 0;
            records.forEach(r => {
                if (r.nombre) profesoresDB.push(r.nombre);
            });
            Cache.set('profesores', [...profesoresDB], Cache._ttls.profesores);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('❌ Error cargando profesores:', error);
        return false;
    }
}

function limpiarCacheAlEditar(tipo) {
    if (tipo === 'materias' || tipo === 'todo') {
        Cache.clear('materias_completas');
    }
    if (tipo === 'profesores' || tipo === 'todo') {
        Cache.clear('profesores');
    }
}

function actualizarVistaMaterias() {
    todasLasMaterias = generarListaGlobalMaterias();
    
    if (document.getElementById('resultadosBusqueda').style.display === 'block') {
        mostrarTodasLasMateriasDelFiltro();
    }
    
    if (materiasSeleccionadas.length > 0) {
        renderizarMaterias();
    }
}

function generarListaGlobalMaterias() {
    const materiasMap = new Map();
    const todasLasCarreras = {};
    
    Object.entries(carrerasDataENEJUNTrabajo).forEach(([key, carrera]) => {
        if (!todasLasCarreras[key]) {
            todasLasCarreras[key] = { nombre: carrera.nombre, materias: [] };
        }
        todasLasCarreras[key].materias.push(...carrera.materias);
    });
    
    Object.entries(carrerasDataAGODICTrabajo).forEach(([key, carrera]) => {
        if (!todasLasCarreras[key]) {
            todasLasCarreras[key] = { nombre: carrera.nombre, materias: [] };
        }
        todasLasCarreras[key].materias.push(...carrera.materias);
    });
    
    Object.values(todasLasCarreras).forEach(carrera => {
        carrera.materias.forEach(materia => {
            const key = materia.nombre;
            if (!materiasMap.has(key)) {
                materiasMap.set(key, []);
            }
            materiasMap.get(key).push({
                carrera: carrera.nombre,
                semestre: materia.semestre,
                horas: materia.horas
            });
        });
    });
    
    const materiasGlobales = [];
    materiasMap.forEach((info, nombre) => {
        materiasGlobales.push({
            nombre: nombre,
            info: info.sort((a, b) => a.semestre - b.semestre)
        });
    });
    
    materiasGlobales.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return materiasGlobales;
}

// ===== BASE DE DATOS DE PROFESORES =====
let profesoresDB = [
    'Abner David Koyoc Martinez', 'Abril Hiore Catzin Tamayo', 'Alejandro Filiberto Gomez Perez',
    'Amilckar Tonchez Mis', 'Ana Maria Valenzuela Muñiz', 'Angel Alejandro Treviño Arzapalo',
    'Argentina Vargas Hernandez', 'Aydee Arely García Elías', 'Bibian Moises Cua Martinez',
    'Bryan Lee Bernal Osorio', 'Carlos Roberto Esquivel Briceño', 'Carmen Manuel Lopez Montero',
    'Cesar Morales Ramirez', 'Cherif Ben-Youssef Brants', 'Diego Ramon Briceño Dominguez',
    'Elizabeth Garduza Flota', 'Florentino Chimal Y Alamilla', 'Francisco Jose Arroyo Rodriguez',
    'Gabriel Marcelo De Jesús Rosado Ortiz', 'Georgina Valeria Palma Carrillo', 'Gerardo Fuster Lopez',
    'German Dzul Sulub', 'German Perez Zuñiga', 'Gladis Del Rosario Cupul Balam',
    'Gustavo Perez Hernandez', 'Javier Pacheco Hipolito', 'Jose Gabriel Sulu Martinez',
    'Jose Gregorio Dzul', 'Jose Ysmael Verde Gomez', 'Juan Antonio Ruiz Velazco De La Garza',
    'Juan Carlos Rodriguez Montes', 'Leopoldo Alberto Justiniano Ferraez', 'Luigi Del Carmen Chay Alvarez',
    'Luis Alfonso Marin Priego', 'Luis Alfredo Marquez Sanchez', 'Luis Fidel Cerecero Natale',
    'Luis Humberto Caballero Mejia', 'Luis Manuel Peña Romero', 'Marco Arroyo Terrazas',
    'Miguel Angel Basto Pech', 'Miguel Angel Briceño Chan', 'Modesto Ek Solis',
    'Néstor Julián Aguilar Sosa', 'Oscar Andres Cardenas Alvarado', 'Oscar Augusto Cárdenas Espinosa',
    'Oscar San Juan Farfan', 'Othoniel Ortiz Ruiz', 'Raul Ramirez Lozano',
    'Rebeca Visairo Mendez', 'Renan Antonio Gonzalez Espinosa', 'Rodrigo Coral Cahuich',
    'Rosa Hilda Valencia Ruiz', 'Rosa Isela Rivera Mendez', 'Santos Eduardo Isaias Peña',
    'Tirso Juan Ordaz Coral', 'Xochitl Nubia Molina Lozano'
].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

// ===== SISTEMA DE NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo = 'success', duracion = 4000) {
    const container = document.getElementById('notificationArea');
    if (!container) return;
    
    const notificacionesEliminar = [
        'Período actual:', 'Mostrando Arquitectura', 'Mostrando Ing. Civil', 'Mostrando Ing. Electromecánica',
        'Mostrando Ing. Ferroviaria', 'Mostrando Ing. Mecatrónica', 'Mostrando todas las carreras',
        'Mostrando todas las carreras y semestres', 'Mostrando', 'Semestre',
        'Todos los horarios de mañana seleccionados', 'Todos los horarios de tarde seleccionados',
        'Horarios de mañana limpiados', 'Horarios de tarde limpiados'
    ];
    
    for (let eliminar of notificacionesEliminar) {
        if (mensaje.includes(eliminar)) return;
    }
    
    const notificacion = document.createElement('div');
    notificacion.className = `notification notification-${tipo}`;
    
    let icono = 'fa-circle-check';
    if (tipo === 'error') icono = 'fa-circle-exclamation';
    if (tipo === 'info') icono = 'fa-circle-info';
    if (tipo === 'warning') icono = 'fa-triangle-exclamation';
    
    notificacion.innerHTML = `
        <i class="fas ${icono}"></i>
        <span class="notification-message">${mensaje}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentElement) {
            notificacion.style.animation = 'slideIn 0.3s reverse';
            setTimeout(() => notificacion.remove(), 300);
        }
    }, duracion);
}

// ===== SISTEMA DE LOGIN ADMIN =====
function verificarAccesoURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const adminKey = urlParams.get('admin');
    const URL_SECRET = 'ITCAdmin2026Secure';
    
    if (adminKey && adminKey === URL_SECRET) {
        accesoURLValido = true;
        return true;
    }
    accesoURLValido = false;
    return false;
}

const ADMIN_CREDENTIALS = {
    username: 'itcancun',
    password: 'TecNM#Cancun2026'
};

function verificarCredenciales(username, password) {
    return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

function mostrarLoginAdmin() {
    const modal = document.getElementById('loginAdminModal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('adminUsername').value = '';
        document.getElementById('adminPassword').value = '';
        setTimeout(() => document.getElementById('adminUsername').focus(), 100);
    }
}

function cerrarLoginAdmin() {
    document.getElementById('loginAdminModal').style.display = 'none';
}

function iniciarSesionAdmin() {
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    if (!username || !password) {
        mostrarNotificacion('Ingresa usuario y contraseña', 'warning');
        return;
    }
    
    if (verificarCredenciales(username, password)) {
        adminActivo = true;
        sessionStorage.setItem('adminAutenticado', 'true');
        cerrarLoginAdmin();
        mostrarPanelAdmin();
        
        setTimeout(() => {
            if (confirm('¿Deseas realizar un backup automático ahora?')) {
                BackupSystem.realizarBackup();
            }
        }, 1000);
        
        if (typeof BackupSystem !== 'undefined' && BackupSystem.iniciarBackupAutomatico) {
            BackupSystem.iniciarBackupAutomatico();
            mostrarNotificacion('⏰ Backup automático programado (cada 24h)', 'info', 3000);
        }
        
        mostrarNotificacion('🔑 Sesión admin iniciada', 'success');
    } else {
        mostrarNotificacion('❌ Credenciales incorrectas', 'error');
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPassword').focus();
    }
}

function mostrarPanelAdmin() {
    const adminPanel = document.getElementById('adminAccess');
    if (adminPanel) {
        adminPanel.style.display = 'flex';
        actualizarInterfazPeriodo();
    }
}

function cerrarSesionAdmin() {
    adminActivo = false;
    sessionStorage.removeItem('adminAutenticado');
    document.getElementById('adminAccess').style.display = 'none';
    mostrarNotificacion('🔒 Sesión cerrada', 'info');
}

function crearBotonAccesoAdmin() {
    if (!accesoURLValido) return;
    if (document.getElementById('adminAccessBtn')) return;
    
    const btn = document.createElement('button');
    btn.id = 'adminAccessBtn';
    btn.className = 'admin-panel-btn admin-panel-btn-fixed';
    btn.textContent = 'Panel Admin';
    document.body.appendChild(btn);
    
    btn.addEventListener('click', () => {
        if (adminActivo) {
            mostrarPanelAdmin();
        } else {
            mostrarLoginAdmin();
        }
    });
}

function configurarPanelAdmin() {
    const adminPanel = document.getElementById('adminAccess');
    const closeBtn = document.getElementById('closeAdminBtn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            adminPanel.style.display = 'none';
        });
    }
    
    if (adminPanel) {
        adminPanel.addEventListener('click', (e) => {
            if (e.target === adminPanel) {
                adminPanel.style.display = 'none';
            }
        });
    }
    
    const verEncuestasBtn = document.getElementById('verEncuestasBtn');
    if (verEncuestasBtn) {
        verEncuestasBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!adminActivo) {
                mostrarLoginAdmin();
                return;
            }
            verTodasLasEncuestas();
        });
    }
    
    const gestionarMateriasBtn = document.getElementById('gestionarMateriasBtn');
    if (gestionarMateriasBtn) {
        gestionarMateriasBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!adminActivo) {
                mostrarLoginAdmin();
                return;
            }
            gestionarMaterias();
        });
    }
    
    const gestionarProfesoresBtn = document.getElementById('gestionarProfesoresBtn');
    if (gestionarProfesoresBtn) {
        gestionarProfesoresBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!adminActivo) {
                mostrarLoginAdmin();
                return;
            }
            gestionarProfesores();
        });
    }
    
    const backupBtn = document.getElementById('backupBtn');
    if (backupBtn) {
        backupBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            if (!adminActivo) {
                mostrarLoginAdmin();
                return;
            }
            if (typeof BackupSystem !== 'undefined') {
                await BackupSystem.realizarBackup();
            }
        });
    }
    
    const restaurarBtn = document.getElementById('restaurarBtn');
    if (restaurarBtn) {
        restaurarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!adminActivo) {
                mostrarLoginAdmin();
                return;
            }
            if (typeof BackupSystem !== 'undefined') {
                BackupSystem.mostrarModalRestauracion();
            }
        });
    }
}

function inicializarModoAdmin() {
    verificarAccesoURL();
    
    const sesionActiva = sessionStorage.getItem('adminAutenticado') === 'true';
    if (sesionActiva) {
        adminActivo = true;
    }
    
    crearBotonAccesoAdmin();
    
    document.getElementById('cerrarLoginBtn')?.addEventListener('click', cerrarLoginAdmin);
    document.getElementById('loginAdminBtn')?.addEventListener('click', iniciarSesionAdmin);
    
    document.getElementById('adminPassword')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') iniciarSesionAdmin();
    });
    
    configurarPanelAdmin();
}

// ===== MANEJO DE TIPO DE PLAZA =====
function inicializarTipoPlaza() {
    const selectPlaza = document.getElementById('tipoPlaza');
    const horasContainer = document.getElementById('horasPlazaContainer');
    const inputHoras = document.getElementById('horasPlaza');
    
    if (selectPlaza) {
        selectPlaza.addEventListener('change', function() {
            const valor = this.value;
            
            if (valor === 'por_horas') {
                horasContainer.style.display = 'flex';
                inputHoras.required = true;
                inputHoras.focus();
                mostrarNotificacion('Ingresa el número de horas semanales', 'info', 3000);
            } else {
                horasContainer.style.display = 'none';
                inputHoras.required = false;
                inputHoras.value = '';
                datosProfesor.horasPlaza = '';
            }
            
            actualizarDatosProfesor();
        });
        
        if (inputHoras) {
            inputHoras.addEventListener('input', function() {
                if (this.value.length > 3) {
                    this.value = this.value.slice(0, 3);
                }
                actualizarDatosProfesor();
            });
        }
    }
}

// ===== SISTEMA DE BÚSQUEDA DE PROFESORES =====
function inicializarBuscadorProfesores() {
    const buscador = document.getElementById('buscadorProfesores');
    if (!buscador) return;
    
    buscador.addEventListener('focus', function() {
        mostrarTodosLosProfesores();
    });
    
    buscador.addEventListener('input', function(e) {
        const termino = e.target.value.toLowerCase().trim();
        if (termino === '') {
            mostrarTodosLosProfesores();
        } else {
            buscarProfesores(termino);
        }
    });
    
    document.addEventListener('click', (e) => {
        const buscador = document.getElementById('buscadorProfesores');
        const resultados = document.getElementById('resultadosProfesores');
        
        if (buscador && resultados) {
            if (!buscador.contains(e.target) && !resultados.contains(e.target)) {
                resultados.style.display = 'none';
            }
        }
    });
}

function mostrarTodosLosProfesores() {
    const resultadosContainer = document.getElementById('resultadosProfesores');
    const resultadosLista = document.getElementById('listaProfesores');
    const contador = document.getElementById('contadorProfesores');
    
    if (!resultadosContainer || !resultadosLista) return;
    
    resultadosContainer.style.display = 'block';
    if (contador) contador.textContent = `${profesoresDB.length} profesores`;
    
    resultadosLista.innerHTML = '';
    
    if (profesoresDB.length === 0) {
        resultadosLista.innerHTML = '<div class="resultado-sin-resultados">No hay profesores registrados</div>';
        return;
    }
    
    profesoresDB.forEach(nombre => {
        const item = crearItemProfesor(nombre);
        resultadosLista.appendChild(item);
    });
}

function buscarProfesores(termino) {
    const resultadosContainer = document.getElementById('resultadosProfesores');
    const resultadosLista = document.getElementById('listaProfesores');
    const contador = document.getElementById('contadorProfesores');
    
    if (!resultadosContainer || !resultadosLista) return;
    
    resultadosContainer.style.display = 'block';
    
    const terminoNormalizado = quitarAcentos(termino);
    const resultados = profesoresDB.filter(nombre => {
        const nombreNormalizado = quitarAcentos(nombre.toLowerCase());
        return nombreNormalizado.includes(terminoNormalizado);
    });
    
    if (contador) contador.textContent = `${resultados.length} profesores`;
    
    if (resultados.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No se encontraron profesores para "${termino}"</p>
                <small>Selecciona "Otro profesor" para ingresarlo manualmente</small>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    resultados.forEach(nombre => {
        const item = crearItemProfesor(nombre);
        resultadosLista.appendChild(item);
    });
}

window.seleccionarProfesor = async function(nombre) {
    document.getElementById('nombreProfesor').value = nombre;
    document.getElementById('buscadorProfesores').value = nombre;
    document.getElementById('resultadosProfesores').style.display = 'none';
    document.getElementById('otroProfesorContainer').style.display = 'none';
    
    actualizarDatosProfesor();
    
    yaPregunteEstaCombinacion = false;
    bloqueado = false;
    ultimaPreguntaEncuesta = null;
    
    const correoActual = document.getElementById('correoProfesor').value.trim();
    const claveActual = document.getElementById('codigoProfesor').value.trim();
    
    if (!correoActual) {
        mostrarNotificacion(' Por favor ingresa tu correo para buscar encuestas anteriores', 'info', 4000);
    } else if (validarEmail(correoActual)) {
        let intentos = 0;
        const maxIntentos = 5;
        
        async function intentarVerificar() {
            const correo = document.getElementById('correoProfesor').value.trim();
            const clave = document.getElementById('codigoProfesor').value.trim();
            
            if (correo && validarEmail(correo)) {
                await verificarEncuestaForzado(nombre, correo, clave, true);
            }
            
            if (intentos < maxIntentos) {
                intentos++;
                setTimeout(intentarVerificar, 300);
            }
        }
        
        intentarVerificar();
    }
    
    guardarBorrador();
    mostrarNotificacion(`Profesor "${nombre}" seleccionado`, 'success');
};

function crearItemProfesor(nombre) {
    const item = document.createElement('div');
    item.className = 'profesor-item';
    item.onclick = () => seleccionarProfesor(nombre);
    
    item.innerHTML = `
        <div style="display: flex; flex-direction: column; width: 100%;">
            <h4 style="margin: 0;"><i class="fas fa-user-circle"></i> ${nombre}</h4>
        </div>
        <i class="fas fa-check-circle" style="color: #0077BE; font-size: 1.3rem;"></i>
    `;
    
    return item;
}

window.mostrarCampoOtroProfesor = function() {
    document.getElementById('resultadosProfesores').style.display = 'none';
    document.getElementById('buscadorProfesores').value = '';
    
    const container = document.getElementById('otroProfesorContainer');
    container.style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('otroProfesorInput').focus();
    }, 100);
    
    mostrarNotificacion('Ingresa el nombre del profesor manualmente', 'info');
};

window.confirmarOtroProfesor = async function() {
    const nombre = document.getElementById('otroProfesorInput').value.trim();
    
    if (!nombre) {
        mostrarNotificacion('Por favor, ingresa un nombre', 'warning');
        return;
    }
    
    document.getElementById('nombreProfesor').value = nombre;
    document.getElementById('buscadorProfesores').value = nombre;
    document.getElementById('otroProfesorContainer').style.display = 'none';
    document.getElementById('otroProfesorInput').value = '';
    
    actualizarDatosProfesor();
    
    yaPregunteEstaCombinacion = false;
    bloqueado = false;
    ultimaPreguntaEncuesta = null;
    
    let intentos = 0;
    const maxIntentos = 8;
    
    async function intentarVerificar() {
        const correo = document.getElementById('correoProfesor').value.trim();
        const clave = document.getElementById('codigoProfesor').value.trim();
        
        if (correo && validarEmail(correo)) {
            await verificarEncuestaForzado(nombre, correo, clave, true);
        }
        
        if (intentos < maxIntentos) {
            intentos++;
            setTimeout(intentarVerificar, 400);
        }
    }
    
    intentarVerificar();
    
    guardarBorrador();
    mostrarNotificacion(`Profesor "${nombre}" registrado`, 'success');
};

window.cancelarOtroProfesor = function() {
    document.getElementById('otroProfesorContainer').style.display = 'none';
    document.getElementById('otroProfesorInput').value = '';
    document.getElementById('resultadosProfesores').style.display = 'block';
    mostrarNotificacion('Selecciona un profesor de la lista', 'info');
};

function actualizarOpcionesSemestre() {
    const selectSemestre = document.getElementById('selectSemestre');
    if (!selectSemestre) return;
    
    const valorActual = selectSemestre.value;
    const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    let opcionesHTML = '<option value="">-- Todos los semestres --</option>';
    semestres.forEach(sem => {
        opcionesHTML += `<option value="${sem}">Semestre ${sem}</option>`;
    });
    
    selectSemestre.innerHTML = opcionesHTML;
    
    if (valorActual && semestres.includes(parseInt(valorActual))) {
        selectSemestre.value = valorActual;
    } else {
        selectSemestre.value = '';
        filtroSemestreActual = '';
    }
}

function inicializarSistemaMaterias() {
    const selectCarrera = document.getElementById('selectCarrera');
    const selectSemestre = document.getElementById('selectSemestre');
    const buscador = document.getElementById('buscadorMaterias');
    
    if (selectCarrera) {
        selectCarrera.addEventListener('change', manejarCambioFiltros);
    }
    
    if (selectSemestre) {
        selectSemestre.addEventListener('change', manejarCambioFiltros);
    }
    
    if (buscador) {
        buscador.addEventListener('focus', function() {
            if (typeof todasLasMaterias !== 'undefined') {
                mostrarTodasLasMateriasDelFiltro();
            }
        });
        buscador.addEventListener('input', manejarBusquedaEnTiempoReal);
    }
    
    document.addEventListener('click', (e) => {
        const buscador = document.getElementById('buscadorMaterias');
        const resultados = document.getElementById('resultadosBusqueda');
        const selectorNivel = document.getElementById('selectorNivelContainer');
        
        if (!buscador.contains(e.target) && !resultados.contains(e.target) && !selectorNivel.contains(e.target)) {
            resultados.style.display = 'none';
        }
    });
    
    const btnCancelar = document.getElementById('cancelarSeleccionBtn');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cancelarSeleccionMateria);
    }
    
    const btnAgregar = document.getElementById('addMateriaBtn');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', manejarAgregarMateria);
    }
    
    document.addEventListener('click', manejarEventosMaterias);
    
    renderizarMaterias();
    actualizarContadorMaterias();
    
    function esperarMateriasYMostrar() {
        if (typeof todasLasMaterias !== 'undefined' && todasLasMaterias.length > 0) {
            mostrarTodasLasMateriasDelFiltro();
        } else {
            setTimeout(esperarMateriasYMostrar, 200);
        }
    }
    
    setTimeout(esperarMateriasYMostrar, 100);
}

function manejarCambioFiltros() {
    const selectCarrera = document.getElementById('selectCarrera');
    const selectSemestre = document.getElementById('selectSemestre');
    
    filtroCarreraActual = selectCarrera ? selectCarrera.value : '';
    filtroSemestreActual = selectSemestre ? selectSemestre.value : '';
    
    const buscador = document.getElementById('buscadorMaterias');
    if (buscador) buscador.value = '';
    
    mostrarTodasLasMateriasDelFiltro();
}

function mostrarTodasLasMateriasDelFiltro() {
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    if (!filtroCarreraActual && !filtroSemestreActual) {
        renderizarListaMaterias(todasLasMaterias);
        if (contador) contador.textContent = `${todasLasMaterias.length} materias`;
        return;
    }
    
    let nombreCarreraSeleccionada = null;
    if (filtroCarreraActual) {
        const mapaNombres = {
            'arquitectura': 'Arquitectura',
            'civil': 'Ing. Civil',
            'electromecanica': 'Ing. Electromecánica',
            'ferroviaria': 'Ing. Ferroviaria',
            'mecatronica': 'Ing. Mecatrónica',
            'maestria_ambiental': 'Maestría en Ciencias Ambientales',
            'maestria_negocios': 'Maestría en Administración de Negocios',
            'doctorado_ambiental': 'Doctorado en Ciencias Ambientales'
        };
        nombreCarreraSeleccionada = mapaNombres[filtroCarreraActual];
        
        if (!nombreCarreraSeleccionada && carrerasData[filtroCarreraActual]) {
            nombreCarreraSeleccionada = carrerasData[filtroCarreraActual].nombre;
        }
    }
    
    const semestreSeleccionado = filtroSemestreActual ? parseInt(filtroSemestreActual) : null;
    
    let materiasFiltradas = [...todasLasMaterias];
    
    if (nombreCarreraSeleccionada) {
        materiasFiltradas = materiasFiltradas.filter(materia => {
            return materia.info.some(info => info.carrera === nombreCarreraSeleccionada);
        });
    }
    
    if (semestreSeleccionado) {
        materiasFiltradas = materiasFiltradas.filter(materia => {
            return materia.info.some(info => info.semestre === semestreSeleccionado);
        });
    }
    
    const materiasParaMostrar = [];
    
    for (const materia of materiasFiltradas) {
        let infoFiltrada = [...materia.info];
        
        if (nombreCarreraSeleccionada) {
            infoFiltrada = infoFiltrada.filter(info => info.carrera === nombreCarreraSeleccionada);
        }
        
        if (semestreSeleccionado) {
            infoFiltrada = infoFiltrada.filter(info => info.semestre === semestreSeleccionado);
        }
        
        if (infoFiltrada.length > 0) {
            materiasParaMostrar.push({
                nombre: materia.nombre,
                info: infoFiltrada
            });
        }
    }
    
    materiasParaMostrar.sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    if (contador) contador.textContent = `${materiasParaMostrar.length} materias`;
    
    if (materiasParaMostrar.length === 0) {
        let mensaje = 'No hay materias disponibles';
        if (nombreCarreraSeleccionada && semestreSeleccionado) {
            mensaje = `No hay materias para ${nombreCarreraSeleccionada} en Semestre ${semestreSeleccionado}`;
        } else if (nombreCarreraSeleccionada) {
            mensaje = `No hay materias para ${nombreCarreraSeleccionada}`;
        } else if (semestreSeleccionado) {
            mensaje = `No hay materias en Semestre ${semestreSeleccionado}`;
        }
        
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>${mensaje}</p>
                <small>Prueba con otros filtros</small>
            </div>
        `;
        return;
    }
    
    renderizarListaMaterias(materiasParaMostrar);
}

function renderizarListaMaterias(materias) {
    const resultadosLista = document.getElementById('resultadosLista');
    if (!resultadosLista) return;
    
    resultadosLista.innerHTML = '';
    materias.forEach(materia => {
        const resultadoItem = crearResultadoItem(materia);
        resultadosLista.appendChild(resultadoItem);
    });
}

function manejarBusquedaEnTiempoReal(event) {
    const termino = event.target.value.toLowerCase().trim();
    const resultadosContainer = document.getElementById('resultadosBusqueda');
    const resultadosLista = document.getElementById('resultadosLista');
    const contador = document.getElementById('contadorResultados');
    
    resultadosContainer.style.display = 'block';
    
    let materiasBase = [];
    
    if (!filtroCarreraActual && !filtroSemestreActual) {
        materiasBase = [...todasLasMaterias];
    } else {
        materiasBase = todasLasMaterias.filter(materia => {
            const infoFiltrada = materia.info.filter(info => {
                if (filtroCarreraActual) {
                    const carreraKey = Object.keys(carrerasData).find(
                        key => carrerasData[key].nombre === info.carrera
                    );
                    if (carreraKey !== filtroCarreraActual) return false;
                }
                if (filtroSemestreActual) {
                    if (info.semestre !== parseInt(filtroSemestreActual)) return false;
                }
                return true;
            });
            return infoFiltrada.length > 0;
        });
    }
    
    if (termino === '') {
        if (contador) contador.textContent = `${materiasBase.length} materias`;
        resultadosLista.innerHTML = '';
        materiasBase.forEach(materia => {
            const resultadoItem = crearResultadoItem(materia);
            resultadosLista.appendChild(resultadoItem);
        });
        return;
    }
    
    const terminoNormalizado = quitarAcentos(termino);
    const resultados = materiasBase.filter(materia => {
        const nombreNormalizado = quitarAcentos(materia.nombre.toLowerCase());
        const infoTexto = materia.info.map(i => `${i.carrera} - Semestre ${i.semestre}`).join(' ').toLowerCase();
        const infoNormalizado = quitarAcentos(infoTexto);
        const buscaSemestre = termino.match(/\d+/);
        const coincideSemestre = buscaSemestre ? materia.info.some(i => i.semestre === parseInt(buscaSemestre[0])) : false;
        
        return nombreNormalizado.includes(terminoNormalizado) ||
               infoNormalizado.includes(terminoNormalizado) ||
               coincideSemestre;
    });
    
    resultados.sort((a, b) => {
        const aNombre = quitarAcentos(a.nombre.toLowerCase());
        const bNombre = quitarAcentos(b.nombre.toLowerCase());
        if (aNombre.startsWith(terminoNormalizado) && !bNombre.startsWith(terminoNormalizado)) return -1;
        if (!aNombre.startsWith(terminoNormalizado) && bNombre.startsWith(terminoNormalizado)) return 1;
        return a.nombre.localeCompare(b.nombre);
    });
    
    if (contador) contador.textContent = `${resultados.length} materias`;
    
    if (resultados.length === 0) {
        resultadosLista.innerHTML = `
            <div class="resultado-sin-resultados">
                <i class="fas fa-search"></i>
                <p>No se encontraron materias para "${termino}"</p>
                <small>Intenta con otro término o número de semestre</small>
            </div>
        `;
        return;
    }
    
    resultadosLista.innerHTML = '';
    resultados.forEach(materia => {
        const resultadoItem = crearResultadoItem(materia);
        resultadosLista.appendChild(resultadoItem);
    });
}

function crearResultadoItem(materia) {
    const resultadoItem = document.createElement('div');
    resultadoItem.className = 'resultado-item';
    resultadoItem.onclick = () => seleccionarMateria(materia);
    
    const estaSeleccionada = materiasSeleccionadas.some(m => m.nombre === materia.nombre);
    
    if (!materia.info || materia.info.length === 0) {
        console.warn('Materia sin información:', materia);
        return resultadoItem;
    }
    
    let infoTexto = '';
    materia.info.forEach((i, index) => {
        if (index > 0) infoTexto += ' • ';
        infoTexto += `${i.carrera} - Semestre ${i.semestre}`;
        if (i.horas && i.horas !== null) {
            infoTexto += ` (${i.horas} h/sem)`;
        }
    });
    
    resultadoItem.innerHTML = `
        <div class="resultado-info">
            <h4>${materia.nombre}</h4>
            <p>
                <span class="resultado-carrera">${infoTexto}</span>
                ${estaSeleccionada ? '<span class="resultado-seleccionada"><i class="fas fa-check-circle"></i> Ya agregada</span>' : ''}
            </p>
        </div>
        ${!estaSeleccionada ? '<i class="fas fa-plus-circle" style="color: #0077BE; font-size: 1.5rem;"></i>' : '<i class="fas fa-check-circle" style="color: #2ecc71; font-size: 1.5rem;"></i>'}
    `;
    
    if (estaSeleccionada) {
        resultadoItem.style.opacity = '0.7';
        resultadoItem.style.cursor = 'not-allowed';
        resultadoItem.onclick = null;
    }
    
    return resultadoItem;
}

function seleccionarMateria(materia) {
    const yaExiste = materiasSeleccionadas.some(m => m.nombre === materia.nombre);
    if (yaExiste) {
        mostrarNotificacion('Esta materia ya ha sido agregada', 'warning');
        return;
    }
    
    materiaSeleccionadaTemp = materia;
    
    const selectorNivel = document.getElementById('selectorNivelContainer');
    const preview = document.getElementById('materiaSeleccionadaPreview');
    const buscador = document.getElementById('buscadorMaterias');
    const resultados = document.getElementById('resultadosBusqueda');
    
    let infoTexto = '';
    materia.info.forEach((i, index) => {
        if (index > 0) infoTexto += ' • ';
        infoTexto += `${i.carrera} - Semestre ${i.semestre}`;
        if (i.horas) infoTexto += ` (${i.horas} h/sem)`;
    });
    
    preview.innerHTML = `
        <h4><i class="fas fa-check-circle" style="color: #27ae60;"></i> ${materia.nombre}</h4>
        <p>
            <span><i class="fas fa-graduation-cap"></i> ${infoTexto}</span>
        </p>
    `;
    
    selectorNivel.style.display = 'block';
    resultados.style.display = 'none';
    buscador.value = '';
    document.getElementById('selectNivel').value = '';
}

function cancelarSeleccionMateria() {
    materiaSeleccionadaTemp = null;
    document.getElementById('selectorNivelContainer').style.display = 'none';
    document.getElementById('selectNivel').value = '';
    mostrarTodasLasMateriasDelFiltro();
}

function manejarAgregarMateria(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (!datosProfesor || !datosProfesor.nombre || !datosProfesor.correo) {
        mostrarNotificacion('Por favor, completa tus datos primero', 'warning');
        return;
    }
    
    if (!materiaSeleccionadaTemp || !materiaSeleccionadaTemp.nombre) {
        mostrarNotificacion('Primero selecciona una materia de la lista', 'warning');
        const resultados = document.getElementById('resultadosBusqueda');
        if (resultados) resultados.style.display = 'block';
        return;
    }
    
    const selectNivel = document.getElementById('selectNivel');
    if (!selectNivel) return;
    
    const nivel = selectNivel.value;
    if (!nivel) {
        mostrarNotificacion('Selecciona el nivel de preferencia', 'warning');
        return;
    }
    
    const nombreMateria = materiaSeleccionadaTemp.nombre;
    const yaExiste = materiasSeleccionadas.some(m => m.nombre === nombreMateria);
    
    if (yaExiste) {
        mostrarNotificacion(`"${nombreMateria}" ya está agregada`, 'warning');
        cancelarSeleccionMateria();
        return;
    }
    
    const nuevaMateria = {
        id: Date.now(),
        nombre: nombreMateria,
        carreras: [...(materiaSeleccionadaTemp.info || [])],
        nivel: nivel
    };
    
    materiasSeleccionadas.push(nuevaMateria);
    renderizarMaterias();
    actualizarContadorMaterias();
    cancelarSeleccionMateria();
    guardarBorrador();
    
    mostrarNotificacion(`"${nombreMateria}" agregada`, 'success');
}

function manejarEventosMaterias(event) {
    if (event.target.closest('.remove-btn')) {
        const boton = event.target.closest('.remove-btn');
        const materiaId = boton.getAttribute('data-materia-id');
        if (materiaId) eliminarMateriaPorId(materiaId);
    }
}

function eliminarMateriaPorId(id) {
    const idNum = parseInt(id);
    const indice = materiasSeleccionadas.findIndex(m => m.id === idNum);
    
    if (indice !== -1) {
        const materiaEliminada = materiasSeleccionadas[indice];
        materiasSeleccionadas.splice(indice, 1);
        renderizarMaterias();
        actualizarContadorMaterias();
        guardarBorrador();
        mostrarNotificacion(`"${materiaEliminada.nombre}" eliminada`, 'info');
        
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
    }
}

function renderizarMaterias() {
    const contenedor = document.getElementById('materiasContainer');
    const estadoVacio = document.getElementById('emptyMaterias');
    
    if (!contenedor) return;
    
    const emptyState = estadoVacio ? estadoVacio.cloneNode(true) : null;
    contenedor.innerHTML = '';
    
    if (materiasSeleccionadas.length === 0) {
        if (emptyState) contenedor.appendChild(emptyState);
    } else {
        const materiasOrdenadas = [...materiasSeleccionadas].sort((a, b) => a.nombre.localeCompare(b.nombre));
        materiasOrdenadas.forEach(materia => {
            contenedor.appendChild(crearTarjetaMateria(materia));
        });
    }
}

function actualizarContadorMaterias() {
    const contador = document.getElementById('contadorMateriasSeleccionadas');
    if (contador) contador.textContent = materiasSeleccionadas.length;
}

function crearTarjetaMateria(materia) {
    const div = document.createElement('div');
    div.className = 'materia-card';
    div.setAttribute('data-materia-id', materia.id);
    div.setAttribute('data-nivel', materia.nivel);
    
    let color, texto;
    switch(materia.nivel) {
        case 'alta': color = '#e74c3c'; texto = 'Alta'; break;
        case 'media': color = '#f39c12'; texto = 'Media'; break;
        default: color = '#7f8c8d'; texto = 'Baja';
    }
    
    const infoOrdenada = [...materia.carreras].sort((a, b) => a.semestre - b.semestre);
    const infoTexto = infoOrdenada.map(c => {
        let t = `${c.carrera} - Semestre ${c.semestre}`;
        if (c.horas && c.horas !== null) t += ` (${c.horas} h/sem)`;
        return t;
    }).join(', ');
    
    div.innerHTML = `
        <div class="materia-info">
            <h4>${materia.nombre}</h4>
            <p><i class="fas fa-graduation-cap"></i> ${infoTexto}</p>
            <p style="color: ${color}; font-weight: bold;">Preferencia: ${texto}</p>
        </div>
        <button class="remove-btn" data-materia-id="${materia.id}" title="Eliminar materia">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    return div;
}

// ===== VARIABLES PARA SELECCIÓN POR ARRASTRE =====
let seleccionando = false;
let seleccionInicial = null;
let modoSeleccion = 'agregar';

function iniciarSeleccion(celda) {
    seleccionando = true;
    seleccionInicial = celda;
    
    const estaSeleccionada = celda.classList.contains('selected');
    modoSeleccion = estaSeleccionada ? 'quitar' : 'agregar';
    
    if (modoSeleccion === 'agregar') {
        agregarHorario(celda);
    } else {
        quitarHorario(celda);
    }
}

function procesarCeldaEnArrastre(celda) {
    if (!seleccionando) return;
    
    if (modoSeleccion === 'agregar' && !celda.classList.contains('selected')) {
        agregarHorario(celda);
    } else if (modoSeleccion === 'quitar' && celda.classList.contains('selected')) {
        quitarHorario(celda);
    }
}

function finalizarSeleccion() {
    seleccionando = false;
    seleccionInicial = null;
    
    if (typeof actualizarResumenHorarios === 'function') {
        actualizarResumenHorarios();
    }
}

function agregarHorario(celda) {
    const id = celda.getAttribute('data-horario-id');
    const dia = celda.getAttribute('data-dia');
    const hora = celda.getAttribute('data-hora');
    const texto = celda.getAttribute('data-texto');
    
    const existe = horariosSeleccionados.some(h => h.id === id);
    if (!existe) {
        horariosSeleccionados.push({ id, dia, hora, texto });
        celda.classList.add('selected');
        guardarBorrador();
    }
}

function quitarHorario(celda) {
    const id = celda.getAttribute('data-horario-id');
    const index = horariosSeleccionados.findIndex(h => h.id === id);
    if (index !== -1) {
        horariosSeleccionados.splice(index, 1);
        celda.classList.remove('selected');
        guardarBorrador();
    }
}

function inicializarHorarios() {
    configurarPestanas();
    generarCuadriculaPorTurno(turnoActivo);
    configurarAccionesRapidas();
    restaurarHorariosSeleccionados();
    
    document.addEventListener('mouseup', finalizarSeleccion);
    document.addEventListener('touchend', finalizarSeleccion);
    document.addEventListener('touchcancel', finalizarSeleccion);
}

function configurarPestanas() {
    const pestanaMatutino = document.getElementById('pestanaMatutino');
    const pestanaVespertino = document.getElementById('pestanaVespertino');
    
    if (pestanaMatutino) {
        pestanaMatutino.addEventListener('click', () => {
            if (turnoActivo === 'matutino') return;
            turnoActivo = 'matutino';
            pestanaMatutino.classList.add('active');
            pestanaVespertino.classList.remove('active');
            generarCuadriculaPorTurno('matutino');
            restaurarHorariosSeleccionados();
        });
    }
    
    if (pestanaVespertino) {
        pestanaVespertino.addEventListener('click', () => {
            if (turnoActivo === 'vespertino') return;
            turnoActivo = 'vespertino';
            pestanaVespertino.classList.add('active');
            pestanaMatutino.classList.remove('active');
            generarCuadriculaPorTurno('vespertino');
            restaurarHorariosSeleccionados();
        });
    }
}

function generarCuadriculaPorTurno(turno) {
    const cuerpo = document.getElementById('cuerpoCuadriculaLimpia');
    if (!cuerpo) return;
    
    cuerpo.innerHTML = '';
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    let horaInicio, horaFin;
    
    if (turno === 'matutino') {
        horaInicio = 7;
        horaFin = 14;
    } else {
        horaInicio = 14;
        horaFin = 22;
    }
    
    for (let hora = horaInicio; hora < horaFin; hora++) {
        const fila = document.createElement('div');
        fila.className = 'fila-hora-limpia';
        dias.forEach(dia => {
            fila.appendChild(crearCeldaHorarioLimpia(dia, hora, hora + 1));
        });
        cuerpo.appendChild(fila);
    }
    
    restaurarHorariosSeleccionados();
}

function crearCeldaHorarioLimpia(dia, horaInicio, horaFin) {
    const celda = document.createElement('div');
    celda.className = 'celda-horario-limpia';
    
    const id = `${dia}_${horaInicio}`;
    const periodo = horaInicio >= 12 ? 'PM' : 'AM';
    const bloqueHora = `${horaInicio}-${horaFin}`;
    const textoHora = `${bloqueHora} ${periodo}`;
    
    celda.setAttribute('data-horario-id', id);
    celda.setAttribute('data-dia', dia);
    celda.setAttribute('data-hora', horaInicio);
    celda.setAttribute('data-texto', textoHora);
    
    celda.innerHTML = `<span class="bloque-hora">${bloqueHora}</span><span class="periodo">${periodo}</span>`;
    
    celda.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        let moved = false;
        
        const onTouchMove = (e) => {
            const deltaX = Math.abs(e.touches[0].clientX - startX);
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            if (deltaX > 5 || deltaY > 5) {
                moved = true;
                const elemento = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
                if (elemento && elemento.classList.contains('celda-horario-limpia')) {
                    if (!seleccionando) iniciarSeleccion(celda);
                    procesarCeldaEnArrastre(elemento);
                }
            }
        };
        
        const onTouchEnd = () => {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
            if (!moved && !seleccionando) {
                toggleHorarioLimpio(celda);
            }
            finalizarSeleccion();
        };
        
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd);
    }, { passive: false });
    
    celda.addEventListener('mousedown', (e) => {
        e.preventDefault();
        iniciarSeleccion(celda);
    });
    
    celda.addEventListener('mouseenter', () => {
        if (seleccionando) procesarCeldaEnArrastre(celda);
    });
    
    celda.addEventListener('mouseup', () => finalizarSeleccion());
    
    return celda;
}

function toggleHorarioLimpio(celda) {
    const id = celda.getAttribute('data-horario-id');
    const dia = celda.getAttribute('data-dia');
    const hora = celda.getAttribute('data-hora');
    const texto = celda.getAttribute('data-texto');
    
    if (celda.classList.contains('selected')) {
        const index = horariosSeleccionados.findIndex(h => h.id === id);
        if (index !== -1) horariosSeleccionados.splice(index, 1);
        celda.classList.remove('selected');
    } else {
        horariosSeleccionados.push({ id, dia, hora: parseInt(hora), texto });
        celda.classList.add('selected');
    }
    guardarBorrador();
    actualizarResumenHorarios();
}

function restaurarHorariosSeleccionados() {
    horariosSeleccionados.forEach(horario => {
        const elemento = document.querySelector(`.celda-horario-limpia[data-horario-id="${horario.id}"]`);
        if (elemento) elemento.classList.add('selected');
    });
}

function seleccionarTodoTurno() {
    const turno = turnoActivo;
    let horaInicio, horaFin;
    if (turno === 'matutino') { horaInicio = 7; horaFin = 14; }
    else { horaInicio = 14; horaFin = 22; }
    
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const nuevosHorarios = [];
    
    dias.forEach(dia => {
        for (let hora = horaInicio; hora < horaFin; hora++) {
            const periodo = hora >= 12 ? 'PM' : 'AM';
            nuevosHorarios.push({
                id: `${dia}_${hora}`, dia, hora,
                texto: `${hora}-${hora+1} ${periodo}`
            });
        }
    });
    
    const horariosOtrosTurnos = horariosSeleccionados.filter(h => {
        const hora = parseInt(h.hora);
        return turno === 'matutino' ? hora >= 14 : hora < 14;
    });
    
    horariosSeleccionados = [...horariosOtrosTurnos, ...nuevosHorarios];
    restaurarHorariosSeleccionados();
    guardarBorrador();
}

function configurarAccionesRapidas() {
    const btnLimpiar = document.getElementById('btnLimpiarTodo');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', () => {
            const turno = turnoActivo;
            let horaInicio, horaFin;
            if (turno === 'matutino') { horaInicio = 7; horaFin = 14; }
            else { horaInicio = 14; horaFin = 22; }
            
            horariosSeleccionados = horariosSeleccionados.filter(h => {
                const hora = parseInt(h.hora);
                return turno === 'matutino' ? hora >= 14 : hora < 14;
            });
            
            document.querySelectorAll('.celda-horario-limpia').forEach(celda => {
                const hora = parseInt(celda.getAttribute('data-hora'));
                if ((turno === 'matutino' && hora < 14) || (turno === 'vespertino' && hora >= 14)) {
                    celda.classList.remove('selected');
                }
            });
            guardarBorrador();
            finalizarSeleccion();
        });
    }
    
    const btnSeleccionarTodo = document.getElementById('btnSeleccionarTodo');
    if (btnSeleccionarTodo) btnSeleccionarTodo.addEventListener('click', seleccionarTodoTurno);
}

function actualizarResumenHorarios() {
    const modal = document.getElementById('confirmacionModal');
    if (modal && modal.style.display === 'flex' && typeof actualizarModalResumen === 'function') {
        actualizarModalResumen();
    }
}

async function cambiarPeriodo(nuevoPeriodo) {
    if (!adminActivo) {
        mostrarLoginAdmin();
        return;
    }
    
    const exito = await guardarPeriodoGlobal(nuevoPeriodo);
    
    if (exito) {
        carrerasData = nuevoPeriodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
        todasLasMaterias = generarListaGlobalMaterias();
        actualizarInterfazPeriodo();
        actualizarOpcionesSemestre();
        
        filtroCarreraActual = '';
        filtroSemestreActual = '';
        const selectCarrera = document.getElementById('selectCarrera');
        if (selectCarrera) selectCarrera.value = '';
        
        if (document.getElementById('resultadosBusqueda').style.display === 'block') {
            mostrarTodasLasMateriasDelFiltro();
        }
        
        mostrarNotificacion(`Período cambiado a ${nuevoPeriodo === 'ene-jun' ? 'ENE - JUN' : 'AGO - DIC'}`, 'success');
    }
}

let todasLasEncuestas = [];
let encuestasFiltradas = [];
let paginaActual = 1;
let itemsPorPagina = 10;

async function verTodasLasEncuestas() {
    try {
        mostrarNotificacion('Cargando inscripciones...', 'info');
        todasLasEncuestas = await pb.collection(COLECCION_INSCRIPCIONES).getFullList({ sort: '-created' });
        
        if (!todasLasEncuestas || todasLasEncuestas.length === 0) {
            mostrarNotificacion('No hay inscripciones guardadas', 'info');
            return;
        }
        
        encuestasFiltradas = [...todasLasEncuestas];
        paginaActual = 1;
        mostrarModalEncuestasAvanzado();
    } catch (error) {
        console.error('❌ Error al obtener inscripciones:', error);
        mostrarNotificacion('Error al obtener inscripciones', 'error');
    }
}

function mostrarModalEncuestasAvanzado() {
    const totalEncuestas = todasLasEncuestas.length;
    
    let modalHTML = `
        <div class="gestion-modal" id="modalVerEncuestas" style="z-index: 30000;">
            <div class="gestion-contenido" style="max-width: 1000px;">
                <div class="gestion-header">
                    <h3><i class="fas fa-clipboard-list"></i> Todas las Inscripciones</h3>
                    <button class="gestion-cerrar" onclick="cerrarModalEncuestas()"><i class="fas fa-times"></i></button>
                </div>
                <div class="gestion-body" style="max-height: 80vh; overflow-y: auto;">
                    <div class="encuestas-stats" style="justify-content: center;">
                        <div class="stat-item"><div class="stat-valor">${totalEncuestas}</div><div class="stat-label">Total Inscripciones</div></div>
                    </div>
                    <div class="encuestas-filtros">
                        <input type="text" class="filtro-input" id="filtroNombre" placeholder="Buscar por nombre..." style="flex: 2;">
                        <select class="filtro-select" id="filtroPeriodo" style="flex: 1;">
                            <option value="todos">Todos los períodos</option>
                            <option value="ene-jun">ENE - JUN</option>
                            <option value="ago-dic">AGO - DIC</option>
                        </select>
                    </div>
                    <div id="encuestasListaContainer"></div>
                    <div id="paginacionContainer" class="paginacion"></div>
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-secondary" onclick="cerrarModalEncuestas()">Cerrar</button>
                    <button class="btn btn-success" id="abrirExportacionBtn"><i class="fas fa-download"></i> Exportar Datos</button>
                </div>
            </div>
        </div>
    `;
    
    const modalAnterior = document.getElementById('modalVerEncuestas');
    if (modalAnterior) modalAnterior.remove();
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    renderizarListaEncuestas();
    
    document.getElementById('filtroNombre').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroPeriodo').addEventListener('change', aplicarFiltros);
    document.getElementById('abrirExportacionBtn').addEventListener('click', () => {
        cerrarModalEncuestas();
        mostrarModalExportacion();
    });
}

function cerrarModalEncuestas() {
    const modal = document.getElementById('modalVerEncuestas');
    if (modal) modal.remove();
}

function aplicarFiltros() {
    const nombreFiltro = document.getElementById('filtroNombre').value.toLowerCase().trim();
    const periodoFiltro = document.getElementById('filtroPeriodo').value;
    
    encuestasFiltradas = todasLasEncuestas.filter(enc => {
        const nombre = enc.profesor?.nombre?.toLowerCase() || '';
        if (nombreFiltro && !nombre.includes(nombreFiltro)) return false;
        if (periodoFiltro !== 'todos' && enc.periodo !== periodoFiltro) return false;
        return true;
    });
    
    paginaActual = 1;
    renderizarListaEncuestas();
}

function renderizarListaEncuestas() {
    const container = document.getElementById('encuestasListaContainer');
    if (!container) return;
    
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const encuestasPagina = encuestasFiltradas.slice(inicio, fin);
    
    let html = '<div class="encuestas-lista">';
    
    encuestasPagina.forEach((enc, index) => {
        const profesor = enc.profesor || {};
        const fecha = enc.fecha ? new Date(enc.fecha).toLocaleString('es-MX') : 'Fecha desconocida';
        const iniciales = profesor.nombre ? profesor.nombre.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase() : '??';
        
        html += `
            <div class="encuesta-card enviada" id="encuesta-${enc.id || index}">
                <div class="encuesta-header">
                    <div class="encuesta-profesor" onclick="toggleEncuestaDetalle('enc-${index}')">
                        <div class="encuesta-avatar">${iniciales}</div>
                        <div class="encuesta-info">
                            <h4>${profesor.nombre || 'Nombre no especificado'}</h4>
                            <p>
                                <i class="fas fa-envelope"></i> ${profesor.correo || 'Sin correo'}
                                <i class="fas fa-id-card" style="margin-left: 10px;"></i> ${profesor.codigo || 'Sin clave'}
                                <i class="fas fa-phone" style="margin-left: 10px;"></i> ${profesor.telefono || 'Sin teléfono'}
                            </p>
                        </div>
                    </div>
                    <span class="encuesta-badge badge-enviada">Inscripción Verano</span>
                </div>
                
                <div class="encuesta-resumen" onclick="toggleEncuestaDetalle('enc-${index}')">
                    <span class="resumen-item"><i class="fas fa-calendar"></i> ${fecha.split(',')[0]}</span>
                    <span class="resumen-item"><i class="fas fa-book"></i> ${enc.materias?.length || 0} cursos</span>
                    <span class="resumen-item"><i class="fas fa-clock"></i> ${enc.horarios?.length || 0} horarios</span>
                    <span class="resumen-item"><i class="fas fa-briefcase"></i> ${profesor.tipoPlaza || 'Plaza no especificada'}</span>
                </div>
                
                <div class="encuesta-footer" onclick="toggleEncuestaDetalle('enc-${index}')">
                    <span><i class="far fa-clock"></i> ${fecha}</span>
                </div>
                
                <div class="encuesta-detalles" id="enc-${index}">
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-user-graduate"></i> Datos completos del profesor</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                            <div><strong><i class="fas fa-user"></i> Nombre:</strong><br>${profesor.nombre || 'No especificado'}</div>
                            <div><strong><i class="fas fa-envelope"></i> Correo:</strong><br>${profesor.correo || 'No especificado'}</div>
                            <div><strong><i class="fas fa-id-card"></i> Clave docente:</strong><br>${profesor.codigo || 'No especificada'}</div>
                            <div><strong><i class="fas fa-phone"></i> Teléfono:</strong><br>${profesor.telefono || 'No especificado'}</div>
                            <div><strong><i class="fas fa-briefcase"></i> Tipo de plaza:</strong><br>${formatearPlaza(profesor.tipoPlaza, profesor.horasPlaza)}</div>
                        </div>
                    </div>
                    
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-book-open"></i> Cursos seleccionados</h5>
                        <div class="detalle-materias">
        `;
        
        if (enc.materias && enc.materias.length > 0) {
            enc.materias.forEach(m => {
                const carrerasTexto = m.carreras ? m.carreras.map(c => {
                    let texto = `${c.carrera} - Sem ${c.semestre}`;
                    if (c.horas && c.horas !== null) texto += ` (${c.horas} h/sem)`;
                    return texto;
                }).join(', ') : 'Sin carrera';
                const nivelTexto = { alta: 'Alta', media: 'Media', baja: 'Baja' }[m.nivel] || 'No especificado';
                const nivelColor = { alta: '#e74c3c', media: '#f39c12', baja: '#7f8c8d' }[m.nivel] || '#7f8c8d';
                
                html += `
                    <div class="detalle-materia-item">
                        <strong>${m.nombre}</strong>
                        <small>${carrerasTexto}</small>
                        <div><small style="color: ${nivelColor};">Nivel: ${nivelTexto}</small></div>
                    </div>
                `;
            });
        } else {
            html += '<div class="detalle-materia-item">No hay cursos seleccionados</div>';
        }
        
        html += `
                        </div>
                    </div>
                    
                    <div class="detalle-seccion">
                        <h5><i class="fas fa-clock"></i> Horarios seleccionados</h5>
        `;
        
        if (enc.horarios && enc.horarios.length > 0) {
            html += generarTablaHorarios(enc.horarios);
        } else {
            html += `
                <div class="detalle-horarios">
                    <div style="color: #6c757d; font-style: italic; padding: 15px; text-align: center; border: 1px dashed #dee2e6; border-radius: 8px;">
                        <i class="fas fa-clock"></i> No hay horarios seleccionados
                    </div>
                </div>
            `;
        }
        
        html += `
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    renderizarPaginacion();
}

function formatearPlaza(tipo, horas) {
    const plazas = {
        'tiempo_completo': 'Tiempo completo',
        'tres_cuartos': '3/4 de tiempo',
        'medio_tiempo': 'Medio tiempo',
        'por_horas': 'Por horas-base',
        'honorarios': 'Honorarios',
        'nuevo_ingreso': 'Nuevo ingreso'
    };
    let texto = plazas[tipo] || tipo || 'No especificada';
    if (tipo === 'por_horas' && horas) {
        texto += ` (${horas} horas/sem)`;
    }
    return texto;
}

function generarTablaHorarios(horarios) {
    const horariosPorDia = {
        'Lunes': [],
        'Martes': [],
        'Miércoles': [],
        'Jueves': [],
        'Viernes': []
    };
    
    horarios.forEach(h => {
        const diaNormalizado = h.dia === 'Miercoles' ? 'Miércoles' : h.dia;
        if (horariosPorDia[diaNormalizado]) {
            horariosPorDia[diaNormalizado].push(parseInt(h.hora));
        }
    });
    
    Object.keys(horariosPorDia).forEach(dia => {
        horariosPorDia[dia].sort((a, b) => a - b);
    });
    
    let horaMin = 23, horaMax = 0;
    let hayHorarios = false;
    
    Object.values(horariosPorDia).forEach(horas => {
        if (horas.length > 0) {
            hayHorarios = true;
            horas.forEach(h => {
                horaMin = Math.min(horaMin, h);
                horaMax = Math.max(horaMax, h);
            });
        }
    });
    
    if (!hayHorarios) {
        return `<div class="detalle-horarios"><div style="color: #6c757d; font-style: italic; padding: 15px; text-align: center;">No hay horarios seleccionados</div></div>`;
    }
    
    horaMin = Math.max(7, horaMin - 1);
    horaMax = Math.min(22, horaMax + 1);
    
    let html = `
        <div class="detalle-horarios">
            <div class="tabla-horarios-detalle" style="margin-top: 10px;">
                <div class="header-row">
                    <div class="hora-cell">Hora</div>
                    <div class="dias-container">
                        <div class="dia-cell">Lun</div>
                        <div class="dia-cell">Mar</div>
                        <div class="dia-cell">Mié</div>
                        <div class="dia-cell">Jue</div>
                        <div class="dia-cell">Vie</div>
                    </div>
                </div>
    `;
    
    for (let hora = horaMin; hora <= horaMax; hora++) {
        const horaInicio = hora;
        const horaFin = hora + 1;
        const horaStr = horaInicio + ':00-' + horaFin + ':00';
        
        html += `
            <div class="data-row">
                <div class="hora-data">${horaStr}</div>
                <div class="dias-data-container">
                    <div class="dia-data ${horariosPorDia['Lunes'].includes(hora) ? 'seleccionado' : ''}">
                        ${horariosPorDia['Lunes'].includes(hora) ? '✓' : ''}
                    </div>
                    <div class="dia-data ${horariosPorDia['Martes'].includes(hora) ? 'seleccionado' : ''}">
                        ${horariosPorDia['Martes'].includes(hora) ? '✓' : ''}
                    </div>
                    <div class="dia-data ${horariosPorDia['Miércoles'].includes(hora) ? 'seleccionado' : ''}">
                        ${horariosPorDia['Miércoles'].includes(hora) ? '✓' : ''}
                    </div>
                    <div class="dia-data ${horariosPorDia['Jueves'].includes(hora) ? 'seleccionado' : ''}">
                        ${horariosPorDia['Jueves'].includes(hora) ? '✓' : ''}
                    </div>
                    <div class="dia-data ${horariosPorDia['Viernes'].includes(hora) ? 'seleccionado' : ''}">
                        ${horariosPorDia['Viernes'].includes(hora) ? '✓' : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    html += `
            </div>
            <div style="display: flex; gap: 20px; margin-top: 15px; padding: 8px 12px; background: #f8f9fa; border-radius: 20px; font-size: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 16px; height: 16px; background: var(--itc-azul-claro, #0077BE); border-radius: 4px;"></div>
                    <span>Horario seleccionado</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 16px; height: 16px; background: white; border: 2px solid #dee2e6; border-radius: 4px;"></div>
                    <span>Horario disponible</span>
                </div>
                <div style="margin-left: auto;">
                    <span>${horarios.length} bloque(s) seleccionados</span>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

function renderizarPaginacion() {
    const container = document.getElementById('paginacionContainer');
    if (!container) return;
    
    const totalPaginas = Math.ceil(encuestasFiltradas.length / itemsPorPagina);
    
    if (totalPaginas > 1) {
        container.innerHTML = `
            <button class="btn-pagina" onclick="cambiarPagina(${paginaActual - 1})" ${paginaActual === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <span class="pagina-actual">Página ${paginaActual} de ${totalPaginas}</span>
            <button class="btn-pagina" onclick="cambiarPagina(${paginaActual + 1})" ${paginaActual === totalPaginas ? 'disabled' : ''}>
                Siguiente <i class="fas fa-chevron-right"></i>
            </button>
        `;
    } else {
        container.innerHTML = '';
    }
}

function cambiarPagina(nuevaPagina) {
    paginaActual = nuevaPagina;
    renderizarListaEncuestas();
}

function toggleEncuestaDetalle(id) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.style.display = elemento.style.display === 'block' ? 'none' : 'block';
}

async function gestionarMaterias() {
    if (!adminActivo) {
        mostrarLoginAdmin();
        return;
    }
    
    mostrarNotificacion('Abriendo editor de materias...', 'info', 2000);
    
    const modalHTML = `
        <div class="gestion-modal" id="gestionMateriasModal">
            <div class="gestion-contenido">
                <div class="gestion-header">
                    <h3><i class="fas fa-book"></i> Gestionar Materias</h3>
                    <button class="gestion-cerrar" onclick="cerrarGestionMaterias()"><i class="fas fa-times"></i></button>
                </div>
                <div class="gestion-body">
                    <div class="gestion-tabs">
                        <button class="tab-btn active" onclick="cambiarTabMateria('ene-jun', event)">ENE-JUN</button>
                        <button class="tab-btn" onclick="cambiarTabMateria('ago-dic', event)">AGO-DIC</button>
                    </div>
                    <div class="gestion-carreras" id="gestionCarrerasContainer"><div class="cargando">Cargando materias...</div></div>
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-success" onclick="guardarCambiosMaterias()"><i class="fas fa-save"></i> Guardar Cambios</button>
                    <button class="btn btn-secondary" onclick="cerrarGestionMaterias()"><i class="fas fa-times"></i> Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    setTimeout(() => cargarMateriasParaGestion('ene-jun'), 100);
}

let periodoGestionActual = 'ene-jun';

function cambiarTabMateria(periodo, event) {
    periodoGestionActual = periodo;
    filtroGestionMaterias = '';
    filtroGestionCarrera = '';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    cargarMateriasParaGestion(periodo);
}

function cargarMateriasParaGestion(periodo) {
    const data = periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
    const container = document.getElementById('gestionCarrerasContainer');
    if (!container) return;
    
    const filtroActual = filtroGestionMaterias;
    const carreraActual = filtroGestionCarrera;
    
    let html = `
        <div class="gestion-filtros" style="margin-bottom: 20px; padding: 15px; background: #f0f7ff; border-radius: 8px;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <div style="flex: 2;">
                    <label>🔍 Buscar materia:</label>
                    <input type="text" id="filtroMateriaInput" class="filtro-input" placeholder="Escribe el nombre..." value="${filtroActual}">
                </div>
                <div style="flex: 1;">
                    <label>📚 Filtrar por carrera:</label>
                    <select id="filtroCarreraSelect" class="filtro-select">
                        <option value="">Todas las carreras</option>
                        ${Object.keys(data).map(key => `<option value="${key}" ${carreraActual === key ? 'selected' : ''}>${data[key].nombre}</option>`).join('')}
                    </select>
                </div>
            </div>
        </div>
    `;
    
    const terminoBusqueda = filtroGestionMaterias ? quitarAcentos(filtroGestionMaterias.toLowerCase()) : '';
    const materiasFiltradas = {};
    
    Object.entries(data).forEach(([carreraKey, carrera]) => {
        if (filtroGestionCarrera && filtroGestionCarrera !== carreraKey) return;
        
        const materiasFiltradasCarrera = carrera.materias.filter(materia => {
            if (!terminoBusqueda) return true;
            return quitarAcentos(materia.nombre.toLowerCase()).includes(terminoBusqueda);
        });
        
        if (materiasFiltradasCarrera.length) materiasFiltradas[carreraKey] = { nombre: carrera.nombre, materias: materiasFiltradasCarrera };
    });
    
    if (Object.keys(materiasFiltradas).length === 0) {
        html += `<div style="text-align:center;padding:40px"><i class="fas fa-search"></i><p>No se encontraron materias</p></div>`;
    } else {
        Object.entries(materiasFiltradas).forEach(([carreraKey, carrera]) => {
            html += `
                <div class="gestion-carrera">
                    <div class="carrera-titulo">
                        <label>Nombre de la carrera:</label>
                        <input type="text" class="carrera-nombre-input" value="${carrera.nombre.replace(/"/g, '&quot;')}" data-carrera-key="${carreraKey}" data-periodo="${periodo}">
                    </div>
                    <div class="materias-lista" id="materias-${carreraKey}-${periodo}">
            `;
            
            carrera.materias.forEach((materia, index) => {
                const indexOriginal = data[carreraKey].materias.findIndex(m => m.nombre === materia.nombre && m.semestre === materia.semestre);
                html += `
                    <div class="materia-item" data-index="${indexOriginal}">
                        <input type="text" class="materia-nombre" value="${materia.nombre.replace(/"/g, '&quot;')}" data-carrera="${carreraKey}" data-index="${indexOriginal}" data-periodo="${periodo}" style="flex:2;">
                        <input type="number" class="materia-semestre" value="${materia.semestre}" data-carrera="${carreraKey}" data-index="${indexOriginal}" data-periodo="${periodo}" style="flex:0.5;min-width:80px;">
                        <input type="number" class="materia-horas" value="${materia.horas || ''}" placeholder="Horas" data-carrera="${carreraKey}" data-index="${indexOriginal}" data-periodo="${periodo}" style="flex:0.3;min-width:70px;">
                        <button class="btn-remove-materia" onclick="eliminarMateria('${carreraKey}', ${indexOriginal}, '${periodo}')"><i class="fas fa-trash"></i></button>
                    </div>
                `;
            });
            
            html += `
                    </div>
                    <button class="btn-add-materia" onclick="agregarMateria('${carreraKey}', '${periodo}')"><i class="fas fa-plus"></i> Agregar materia</button>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
    
    setTimeout(() => {
        const inputFiltro = document.getElementById('filtroMateriaInput');
        const selectCarrera = document.getElementById('filtroCarreraSelect');
        
        if (inputFiltro) {
            let timeoutId;
            inputFiltro.addEventListener('input', function() {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    filtroGestionMaterias = this.value;
                    cargarMateriasParaGestion(periodo);
                }, 300);
            });
        }
        
        if (selectCarrera) {
            selectCarrera.addEventListener('change', function() {
                filtroGestionCarrera = this.value;
                cargarMateriasParaGestion(periodo);
            });
        }
    }, 100);
}

function agregarMateria(carreraKey, periodo) {
    const container = document.getElementById(`materias-${carreraKey}-${periodo}`);
    const nuevaMateria = document.createElement('div');
    nuevaMateria.className = 'materia-item nueva';
    nuevaMateria.innerHTML = `
        <input type="text" class="materia-nombre nueva" placeholder="Nombre" data-carrera="${carreraKey}" data-nuevo="true" data-periodo="${periodo}" style="flex:2;">
        <input type="number" class="materia-semestre nueva" placeholder="Semestre" data-carrera="${carreraKey}" data-nuevo="true" data-periodo="${periodo}" style="flex:0.5;min-width:80px;">
        <input type="number" class="materia-horas nueva" placeholder="Horas" data-carrera="${carreraKey}" data-nuevo="true" data-periodo="${periodo}" style="flex:0.3;min-width:70px;">
        <button class="btn-remove-materia" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(nuevaMateria);
}

async function eliminarMateria(carreraKey, index, periodo) {
    if (!adminActivo) { mostrarLoginAdmin(); return; }
    if (!confirm('¿Estás seguro?')) return;
    
    const dataTrabajo = periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
    dataTrabajo[carreraKey].materias.splice(index, 1);
    
    if (periodo === 'ene-jun') await guardarCarreraENEJUN(carreraKey);
    else await guardarCarreraAGODIC(carreraKey);
    
    todasLasMaterias = generarListaGlobalMaterias();
    cargarMateriasParaGestion(periodo);
    if (periodo === periodoActivo && document.getElementById('resultadosBusqueda').style.display === 'block') mostrarTodasLasMateriasDelFiltro();
    mostrarNotificacion('Materia eliminada', 'success');
}

async function guardarCambiosMaterias() {
    if (!adminActivo) { mostrarLoginAdmin(); return; }
    
    try {
        const materiasModificadas = [];
        document.querySelectorAll('.materia-item').forEach(item => {
            const nombreInput = item.querySelector('.materia-nombre:not(.nueva)');
            const semestreInput = item.querySelector('.materia-semestre:not(.nueva)');
            const horasInput = item.querySelector('.materia-horas:not(.nueva)');
            const nuevaNombre = item.querySelector('.materia-nombre.nueva');
            const nuevaSemestre = item.querySelector('.materia-semestre.nueva');
            const nuevaHoras = item.querySelector('.materia-horas.nueva');
            
            if (nombreInput && semestreInput) {
                materiasModificadas.push({
                    tipo: 'existente', carrera: nombreInput.dataset.carrera,
                    index: parseInt(nombreInput.dataset.index), periodo: nombreInput.dataset.periodo,
                    nombre: nombreInput.value, semestre: parseInt(semestreInput.value),
                    horas: horasInput ? (parseInt(horasInput.value) || null) : null
                });
            }
            if (nuevaNombre && nuevaSemestre && nuevaNombre.value.trim()) {
                materiasModificadas.push({
                    tipo: 'nueva', carrera: nuevaNombre.dataset.carrera, periodo: nuevaNombre.dataset.periodo,
                    nombre: nuevaNombre.value, semestre: parseInt(nuevaSemestre.value),
                    horas: nuevaHoras ? (parseInt(nuevaHoras.value) || null) : null
                });
            }
        });
        
        materiasModificadas.forEach(item => {
            const dataTrabajo = item.periodo === 'ene-jun' ? carrerasDataENEJUNTrabajo : carrerasDataAGODICTrabajo;
            if (item.tipo === 'existente') {
                if (dataTrabajo[item.carrera] && dataTrabajo[item.carrera].materias[item.index]) {
                    dataTrabajo[item.carrera].materias[item.index].nombre = item.nombre;
                    dataTrabajo[item.carrera].materias[item.index].semestre = item.semestre;
                    dataTrabajo[item.carrera].materias[item.index].horas = item.horas;
                }
            } else {
                if (dataTrabajo[item.carrera]) {
                    dataTrabajo[item.carrera].materias.push({
                        nombre: item.nombre, semestre: item.semestre, horas: item.horas
                    });
                }
            }
        });
        
        await guardarMateriasENEJUN();
        await guardarMateriasAGODIC();
        
        actualizarVistaMaterias();
        limpiarCacheAlEditar('materias');
        mostrarNotificacion('Materias guardadas', 'success');
        setTimeout(() => cerrarGestionMaterias(), 1000);
    } catch (error) {
        mostrarNotificacion('Error al guardar', 'error');
    }
}

function cerrarGestionMaterias() {
    const modal = document.getElementById('gestionMateriasModal');
    if (modal) modal.remove();
}

function gestionarProfesores() {
    if (!adminActivo) { mostrarLoginAdmin(); return; }
    
    filtroGestionProfesores = '';
    const modalHTML = `
        <div class="gestion-modal" id="gestionProfesoresModal">
            <div class="gestion-contenido" style="max-width:600px;">
                <div class="gestion-header">
                    <h3><i class="fas fa-users"></i> Gestionar Profesores (${profesoresDB.length})</h3>
                    <button class="gestion-cerrar" onclick="cerrarGestionProfesores()"><i class="fas fa-times"></i></button>
                </div>
                <div class="gestion-body" style="max-height:70vh;overflow-y:auto;">
                    <div id="listaProfesoresGestion"><div class="cargando">Cargando profesores...</div></div>
                </div>
                <div class="gestion-footer">
                    <button class="btn btn-success" onclick="guardarCambiosProfesores()"><i class="fas fa-save"></i> Guardar</button>
                    <button class="btn btn-secondary" onclick="cerrarGestionProfesores()"><i class="fas fa-times"></i> Cancelar</button>
                </div>
            </div>
        </div>
    `;
    
    const modalAnterior = document.getElementById('gestionProfesoresModal');
    if (modalAnterior) modalAnterior.remove();
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    setTimeout(() => cargarProfesoresParaGestion(), 100);
}

function cargarProfesoresParaGestion() {
    const container = document.getElementById('listaProfesoresGestion');
    if (!container) return;
    
    const filtroActual = filtroGestionProfesores;
    const terminoBusqueda = filtroGestionProfesores ? quitarAcentos(filtroGestionProfesores.toLowerCase()) : '';
    const profesoresFiltrados = profesoresDB.filter(nombre => {
        if (!terminoBusqueda) return true;
        return quitarAcentos(nombre.toLowerCase()).includes(terminoBusqueda);
    });
    
    let html = `
        <div style="margin-bottom:20px;padding:15px;background:#f0f7ff;border-radius:8px;">
            <div style="display:flex;gap:10px;">
                <div style="flex:1;">
                    <label><i class="fas fa-search"></i> Buscar profesor:</label>
                    <input type="text" id="filtroProfesorInput" class="filtro-input" placeholder="Escribe el nombre..." value="${filtroActual}" style="width:100%;padding:10px;">
                </div>
            </div>
            <div style="margin-top:10px;font-size:0.9rem;">Mostrando ${profesoresFiltrados.length} de ${profesoresDB.length} profesores</div>
        </div>
        <div class="profesor-item-gestion" style="background:#f0f7ff;border:2px dashed #27ae60;">
            <button class="btn-add-profesor" onclick="agregarProfesor()" style="width:100%;padding:15px;"><i class="fas fa-user-plus"></i> Agregar nuevo profesor</button>
        </div>
    `;
    
    if (profesoresFiltrados.length === 0) {
        html += `<div style="text-align:center;padding:40px;"><i class="fas fa-search"></i><p>No se encontraron profesores</p></div>`;
    } else {
        profesoresFiltrados.forEach((nombre, index) => {
            const indexOriginal = profesoresDB.findIndex(p => p === nombre);
            html += `
                <div class="profesor-item-gestion" data-index="${indexOriginal}">
                    <input type="text" class="profesor-nombre-input" value="${nombre.replace(/"/g, '&quot;')}" data-index="${indexOriginal}" placeholder="Nombre completo">
                    <button class="btn-remove-profesor" onclick="eliminarProfesor(${indexOriginal})"><i class="fas fa-trash"></i></button>
                </div>
            `;
        });
    }
    
    html += `<div class="profesores-nuevos" id="profesoresNuevosContainer"><h4>Nuevos profesores:</h4><div id="nuevosProfesoresLista"></div></div>`;
    container.innerHTML = html;
    
    setTimeout(() => {
        const inputFiltro = document.getElementById('filtroProfesorInput');
        if (inputFiltro) {
            let timeoutId;
            inputFiltro.addEventListener('input', function() {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    filtroGestionProfesores = this.value;
                    cargarProfesoresParaGestion();
                }, 300);
            });
        }
    }, 100);
}

function agregarProfesor() {
    const container = document.getElementById('nuevosProfesoresLista');
    if (!container) return;
    
    const nuevoProfesor = document.createElement('div');
    nuevoProfesor.className = 'profesor-item-gestion nuevo';
    nuevoProfesor.innerHTML = `
        <input type="text" class="profesor-nombre-input nuevo" placeholder="Nombre completo" style="flex:1;">
        <button class="btn-remove-profesor" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(nuevoProfesor);
    nuevoProfesor.querySelector('input').focus();
}

async function eliminarProfesor(index) {
    if (!adminActivo) { mostrarLoginAdmin(); return; }
    if (!confirm('¿Estás seguro?')) return;
    
    const nombreEliminado = profesoresDB[index];
    profesoresDB.splice(index, 1);
    await guardarProfesoresGlobales();
    cargarProfesoresParaGestion();
    mostrarNotificacion(`Profesor "${nombreEliminado}" eliminado`, 'success');
}

async function guardarCambiosProfesores() {
    if (!adminActivo) { mostrarLoginAdmin(); return; }
    
    const modificados = [];
    const nuevos = [];
    
    document.querySelectorAll('.profesor-item-gestion:not(.nuevo) .profesor-nombre-input').forEach(input => {
        const index = parseInt(input.dataset.index);
        const nuevoNombre = input.value.trim();
        if (nuevoNombre) modificados.push({ index, nuevoNombre });
    });
    
    document.querySelectorAll('.profesor-item-gestion.nuevo .profesor-nombre-input').forEach(input => {
        const nombre = input.value.trim();
        if (nombre) nuevos.push(nombre);
    });
    
    modificados.forEach(item => {
        if (item.index >= 0 && item.index < profesoresDB.length) {
            profesoresDB[item.index] = item.nuevoNombre;
        }
    });
    
    if (nuevos.length) profesoresDB.push(...nuevos);
    profesoresDB.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    
    await guardarProfesoresGlobales();
    limpiarCacheAlEditar('profesores');
    cargarProfesoresParaGestion();
    mostrarNotificacion('Cambios guardados', 'success');
    setTimeout(() => cerrarGestionProfesores(), 1500);
}

function cerrarGestionProfesores() {
    const modal = document.getElementById('gestionProfesoresModal');
    if (modal) modal.remove();
}

function inicializarDatosProfesor() {
    const campos = ['correoProfesor', 'telefonoProfesor', 'codigoProfesor', 'tipoPlaza', 'horasPlaza'];
    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo) {
            const nuevoCampo = campo.cloneNode(true);
            campo.parentNode.replaceChild(nuevoCampo, campo);
            if (id !== 'tipoPlaza' && id !== 'horasPlaza') {
                document.getElementById(id).addEventListener('input', actualizarDatosProfesor);
            }
        }
    });
    inicializarTipoPlaza();
}

function actualizarDatosProfesor() {
    datosProfesor.nombre = document.getElementById('nombreProfesor').value.trim();
    datosProfesor.correo = document.getElementById('correoProfesor').value.trim();
    datosProfesor.telefono = document.getElementById('telefonoProfesor').value.trim();
    datosProfesor.codigo = document.getElementById('codigoProfesor').value.trim();
    datosProfesor.tipoPlaza = document.getElementById('tipoPlaza')?.value || '';
    datosProfesor.horasPlaza = document.getElementById('horasPlaza')?.value || '';
}

function validarYScrollear() {
    if (!datosProfesor.nombre) {
        mostrarNotificacion('Selecciona o ingresa tu nombre', 'warning');
        document.getElementById('buscadorProfesores').focus();
        return false;
    }
    if (!datosProfesor.correo) {
        mostrarNotificacion('Ingresa tu correo electrónico', 'warning');
        document.getElementById('correoProfesor').focus();
        return false;
    }
    if (!validarEmail(datosProfesor.correo)) {
        mostrarNotificacion('Correo no válido', 'error');
        document.getElementById('correoProfesor').focus();
        return false;
    }
    if (!datosProfesor.tipoPlaza) {
        mostrarNotificacion('Selecciona tu tipo de plaza', 'warning');
        document.getElementById('tipoPlaza').focus();
        return false;
    }
    if (datosProfesor.tipoPlaza === 'por_horas' && !datosProfesor.horasPlaza) {
        mostrarNotificacion('Ingresa el número de horas semanales', 'warning');
        document.getElementById('horasPlaza').focus();
        return false;
    }
    if (materiasSeleccionadas.length === 0) {
        mostrarNotificacion('Selecciona al menos un curso', 'warning');
        document.querySelectorAll('.panel')[1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }
    if (horariosSeleccionados.length === 0) {
        mostrarNotificacion('Selecciona al menos un horario', 'warning');
        document.querySelectorAll('.panel')[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }
    return true;
}

function mostrarModalConfirmacion() {
    if (!validarYScrollear()) return;
    actualizarModalResumen();
    document.getElementById('confirmacionModal').style.display = 'flex';
}

function cerrarModalConfirmacion() {
    document.getElementById('confirmacionModal').style.display = 'none';
}

function actualizarModalResumen() {
    const resumenProfesor = document.getElementById('modalResumenProfesor');
    let htmlProfesor = '<ul>';
    htmlProfesor += `<li><i class="fas fa-user"></i> <strong>Nombre:</strong> ${datosProfesor.nombre || 'No especificado'}</li>`;
    htmlProfesor += `<li><i class="fas fa-envelope"></i> <strong>Correo:</strong> ${datosProfesor.correo || 'No especificado'}</li>`;
    if (datosProfesor.codigo) htmlProfesor += `<li><i class="fas fa-id-card"></i> <strong>Clave:</strong> ${datosProfesor.codigo}</li>`;
    if (datosProfesor.telefono) htmlProfesor += `<li><i class="fas fa-phone"></i> <strong>Teléfono:</strong> ${datosProfesor.telefono}</li>`;
    if (datosProfesor.tipoPlaza) {
        let textoPlaza = '';
        switch(datosProfesor.tipoPlaza) {
            case 'tiempo_completo': textoPlaza = 'Tiempo completo'; break;
            case 'tres_cuartos': textoPlaza = '3/4 de tiempo'; break;
            case 'medio_tiempo': textoPlaza = 'Medio tiempo'; break;
            case 'por_horas': textoPlaza = 'Por horas-base'; break;
            case 'honorarios': textoPlaza = 'Honorarios'; break;
            case 'nuevo_ingreso': textoPlaza = 'Nuevo ingreso'; break;
            default: textoPlaza = datosProfesor.tipoPlaza;
        }
        htmlProfesor += `<li><i class="fas fa-briefcase"></i> <strong>Tipo de plaza:</strong> ${textoPlaza}${datosProfesor.tipoPlaza === 'por_horas' && datosProfesor.horasPlaza ? ` (${datosProfesor.horasPlaza} horas/sem)` : ''}</li>`;
    }
    htmlProfesor += '</ul>';
    resumenProfesor.innerHTML = htmlProfesor;
    
    const resumenMaterias = document.getElementById('modalResumenMaterias');
    if (materiasSeleccionadas.length > 0) {
        let htmlMaterias = '<ul>';
        materiasSeleccionadas.forEach(materia => {
            const nivelTexto = { alta: 'Alta', media: 'Media', baja: 'Baja' }[materia.nivel] || 'Baja';
            const nivelColor = { alta: '#e74c3c', media: '#f39c12', baja: '#7f8c8d' }[materia.nivel] || '#7f8c8d';
            const carrerasTexto = materia.carreras.map(c => {
                let t = `${c.carrera} (Sem ${c.semestre})`;
                if (c.horas && c.horas !== null) t += ` - ${c.horas} h/sem`;
                return t;
            }).join(', ');
            htmlMaterias += `<li><i class="fas fa-book" style="color:${nivelColor};"></i> <strong>${materia.nombre}</strong> - <span style="color:${nivelColor};">${nivelTexto}</span><br><small style="margin-left:26px;">${carrerasTexto}</small></li>`;
        });
        htmlMaterias += '</ul>';
        resumenMaterias.innerHTML = htmlMaterias;
    } else {
        resumenMaterias.innerHTML = '<p>No has seleccionado cursos</p>';
    }
    
    const resumenHorarios = document.getElementById('modalResumenHorarios');
    if (horariosSeleccionados.length > 0) {
        const horariosPorDia = { Lunes: [], Martes: [], Miercoles: [], Jueves: [], Viernes: [] };
        horariosSeleccionados.forEach(h => { if (horariosPorDia[h.dia]) horariosPorDia[h.dia].push(parseInt(h.hora)); });
        Object.keys(horariosPorDia).forEach(dia => horariosPorDia[dia].sort((a,b) => a-b));
        
        let htmlHorario = `<div class="tabla-horarios-compacta"><table class="mini-tabla-horarios"><thead><tr><th>Hora</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th></tr></thead><tbody>`;
        for (let hora = 7; hora <= 22; hora++) {
            const horaStr = `${hora}:00-${hora+1}:00`;
            htmlHorario += `<tr><td class="hora-columna">${horaStr}</td>`;
            ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'].forEach(dia => {
                htmlHorario += `<td class="${horariosPorDia[dia]?.includes(hora) ? 'celda-ocupada' : 'celda-vacia'}">${horariosPorDia[dia]?.includes(hora) ? '✓' : ''}</td>`;
            });
            htmlHorario += `</tr>`;
        }
        htmlHorario += `</tbody></td><div class="leyenda-horarios-compacta"><span class="leyenda-item"><span class="cuadrado muestra-ocupado"></span> Horario seleccionado</span><span class="leyenda-item"><span class="cuadrado muestra-vacio"></span> Horario disponible</span></div></div>`;
        resumenHorarios.innerHTML = htmlHorario;
    } else {
        resumenHorarios.innerHTML = '<p>No has seleccionado horarios</p>';
    }
}

function configurarModal() {
    document.getElementById('submitBtn')?.addEventListener('click', mostrarModalConfirmacion);
    document.getElementById('cerrarModalBtn')?.addEventListener('click', cerrarModalConfirmacion);
    document.getElementById('cancelarEnvioBtn')?.addEventListener('click', cerrarModalConfirmacion);
    document.getElementById('confirmarEnvioBtn')?.addEventListener('click', confirmarEnvioEncuesta);
    document.getElementById('confirmacionModal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) cerrarModalConfirmacion();
    });
}

let enviandoEncuesta = false;

async function confirmarEnvioEncuesta() {
    if (enviandoEncuesta) return;
    
    try {
        enviandoEncuesta = true;
        const btnConfirmar = document.getElementById('confirmarEnvioBtn');
        const btnCancelar = document.getElementById('cancelarEnvioBtn');
        if (btnConfirmar) { btnConfirmar.disabled = true; btnConfirmar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'; }
        if (btnCancelar) btnCancelar.disabled = true;
        
        mostrarNotificacion('Enviando inscripción...', 'info');
        
        await pb.collection(COLECCION_INSCRIPCIONES).create({
            profesor: datosProfesor,
            materias: materiasSeleccionadas,
            horarios: horariosSeleccionados,
            periodo: 'verano',
            es_borrador: false,
            fecha: new Date().toISOString()
        });
        
        mostrarNotificacion('¡Inscripción enviada exitosamente!', 'success', 6000);
        if (datosProfesor.nombre && datosProfesor.correo) EncuestaCache.clear(datosProfesor.nombre, datosProfesor.correo, datosProfesor.codigo);
        
        cerrarModalConfirmacion();
        eliminarBorrador();
        
        datosProfesor = { nombre: '', correo: '', telefono: '', codigo: '', tipoPlaza: '', horasPlaza: '' };
        document.getElementById('nombreProfesor').value = '';
        document.getElementById('buscadorProfesores').value = '';
        document.getElementById('correoProfesor').value = '';
        document.getElementById('telefonoProfesor').value = '';
        document.getElementById('codigoProfesor').value = '';
        document.getElementById('tipoPlaza').value = '';
        document.getElementById('horasPlazaContainer').style.display = 'none';
        document.getElementById('horasPlaza').value = '';
        document.getElementById('otroProfesorContainer').style.display = 'none';
        document.getElementById('otroProfesorInput').value = '';
        
        materiasSeleccionadas = [];
        horariosSeleccionados = [];
        filtroCarreraActual = '';
        filtroSemestreActual = '';
        materiaSeleccionadaTemp = null;
        turnoActivo = 'matutino';
        
        const pestanaMatutino = document.getElementById('pestanaMatutino');
        const pestanaVespertino = document.getElementById('pestanaVespertino');
        if (pestanaMatutino) pestanaMatutino.classList.add('active');
        if (pestanaVespertino) pestanaVespertino.classList.remove('active');
        
        renderizarMaterias();
        actualizarContadorMaterias();
        generarCuadriculaPorTurno('matutino');
        
        const selectCarrera = document.getElementById('selectCarrera');
        const selectSemestre = document.getElementById('selectSemestre');
        const buscadorMaterias = document.getElementById('buscadorMaterias');
        if (selectCarrera) selectCarrera.value = '';
        if (selectSemestre) selectSemestre.value = '';
        if (buscadorMaterias) buscadorMaterias.value = '';
        
        document.getElementById('resultadosBusqueda').style.display = 'none';
        document.getElementById('selectorNivelContainer').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => mostrarNotificacion('Formulario listo para una nueva inscripción', 'info', 4000), 1000);
    } catch (error) {
        mostrarNotificacion('Error al guardar la inscripción', 'error');
    } finally {
        enviandoEncuesta = false;
        const btnConfirmar = document.getElementById('confirmarEnvioBtn');
        const btnCancelar = document.getElementById('cancelarEnvioBtn');
        if (btnConfirmar) { btnConfirmar.disabled = false; btnConfirmar.innerHTML = '<i class="fas fa-check-circle"></i> Sí, enviar inscripción'; }
        if (btnCancelar) btnCancelar.disabled = false;
    }
}

// ===== MODAL PARA RECUPERAR INSCRIPCIÓN ANTERIOR =====
let ultimaEncuestaResolver = null;

function mostrarModalRecuperarEncuesta(encuesta) {
    return new Promise((resolve) => {
        ultimaEncuestaResolver = resolve;
        const modal = document.getElementById('modalRecuperarEncuesta');
        if (!modal) { resolve(false); return; }
        
        const profesor = encuesta.profesor || {};
        const fecha = new Date(encuesta.fecha || encuesta.created);
        document.getElementById('recuperarProfesor').textContent = profesor.nombre || 'No especificado';
        document.getElementById('recuperarFecha').textContent = fecha.toLocaleString('es-MX');
        document.getElementById('recuperarMaterias').textContent = encuesta.materias?.length || 0;
        document.getElementById('recuperarHorarios').textContent = encuesta.horarios?.length || 0;
        document.getElementById('recuperarClave').textContent = profesor.codigo || 'No especificada';
        modal.style.display = 'flex';
    });
}

function cerrarModalRecuperarEncuesta(aceptar) {
    const modal = document.getElementById('modalRecuperarEncuesta');
    if (modal) modal.style.display = 'none';
    if (ultimaEncuestaResolver) {
        ultimaEncuestaResolver(aceptar);
        ultimaEncuestaResolver = null;
    }
}

function configurarModalRecuperarEncuesta() {
    const modal = document.getElementById('modalRecuperarEncuesta');
    const btnConfirmar = document.getElementById('btnRecuperarEncuestaConfirmar');
    const btnCancelar = document.getElementById('btnRecuperarEncuestaCancelar');
    const btnCerrar = document.getElementById('cerrarRecuperarModalBtn');
    
    if (btnConfirmar) btnConfirmar.onclick = () => cerrarModalRecuperarEncuesta(true);
    if (btnCancelar) btnCancelar.onclick = () => cerrarModalRecuperarEncuesta(false);
    if (btnCerrar) btnCerrar.onclick = () => cerrarModalRecuperarEncuesta(false);
    if (modal) modal.onclick = (e) => { if (e.target === modal) cerrarModalRecuperarEncuesta(false); };
}

// ===== BÚSQUEDA DE ENCUESTAS ANTERIORES =====
async function buscarUltimaEncuestaProfesor(nombreProfesor, correoProfesor, claveProfesor = '') {
    if (!nombreProfesor || !correoProfesor || !validarEmail(correoProfesor)) return null;
    
    const cacheado = EncuestaCache.get(nombreProfesor, correoProfesor, claveProfesor);
    if (cacheado !== null) return cacheado;
    
    try {
        const tieneClave = claveProfesor && claveProfesor.trim() !== '';
        const filter = tieneClave 
            ? `profesor.nombre = "${nombreProfesor}" && profesor.correo = "${correoProfesor}" && profesor.codigo = "${claveProfesor}"`
            : `profesor.nombre = "${nombreProfesor}" && profesor.correo = "${correoProfesor}" && (profesor.codigo = "" || profesor.codigo = null)`;
        
        const records = await pb.collection(COLECCION_INSCRIPCIONES).getList(1, 1, { filter, sort: '-created' });
        const resultado = records.items[0] || null;
        EncuestaCache.set(nombreProfesor, correoProfesor, claveProfesor, resultado);
        return resultado;
    } catch (error) {
        console.error('Error buscando inscripción:', error);
        return null;
    }
}

async function verificarEncuestaForzado(nombre, correo, clave, mostrarModal = true) {
    if (!nombre || !correo || !validarEmail(correo)) return false;
    const idCombinacion = `${nombre}_${correo}_${clave}`;
    if (yaPregunteEstaCombinacion && ultimaPreguntaEncuesta === idCombinacion) return false;
    
    const ultimaEncuesta = await buscarUltimaEncuestaProfesor(nombre, correo, clave);
    if (ultimaEncuesta) {
        yaPregunteEstaCombinacion = true;
        ultimaPreguntaEncuesta = idCombinacion;
        if (mostrarModal && await mostrarModalRecuperarEncuesta(ultimaEncuesta)) {
            await cargarEncuestaAlFormulario(ultimaEncuesta);
        }
        return true;
    }
    return false;
}

function cargarEncuestaAlFormulario(encuesta) {
    if (!encuesta) return;
    
    if (encuesta.profesor) {
        datosProfesor = { ...encuesta.profesor };
        document.getElementById('nombreProfesor').value = datosProfesor.nombre || '';
        document.getElementById('buscadorProfesores').value = datosProfesor.nombre || '';
        document.getElementById('correoProfesor').value = datosProfesor.correo || '';
        document.getElementById('telefonoProfesor').value = datosProfesor.telefono || '';
        document.getElementById('codigoProfesor').value = datosProfesor.codigo || '';
        
        const selectPlaza = document.getElementById('tipoPlaza');
        const horasContainer = document.getElementById('horasPlazaContainer');
        const inputHoras = document.getElementById('horasPlaza');
        if (selectPlaza && datosProfesor.tipoPlaza) {
            selectPlaza.value = datosProfesor.tipoPlaza;
            if (datosProfesor.tipoPlaza === 'por_horas') {
                horasContainer.style.display = 'flex';
                if (inputHoras && datosProfesor.horasPlaza) inputHoras.value = datosProfesor.horasPlaza;
            } else horasContainer.style.display = 'none';
        }
    }
    
    if (encuesta.materias) {
        materiasSeleccionadas = encuesta.materias.map(m => ({...m}));
        renderizarMaterias();
        actualizarContadorMaterias();
    }
    
    if (encuesta.horarios) {
        horariosSeleccionados = encuesta.horarios.map(h => ({...h}));
        restaurarHorariosSeleccionados();
    }
    
    mostrarNotificacion('Datos cargados', 'success');
}

function inicializarDetectorUnificado() {
    const inputNombre = document.getElementById('nombreProfesor');
    const inputCorreo = document.getElementById('correoProfesor');
    const inputClave = document.getElementById('codigoProfesor');
    if (!inputNombre || !inputCorreo) return;
    
    let timeoutId;
    let lastValues = { nombre: '', correo: '', clave: '' };
    
    async function verificar() {
        const nombre = inputNombre.value.trim();
        const correo = inputCorreo.value.trim();
        const clave = inputClave?.value.trim() || '';
        if (nombre && correo && validarEmail(correo)) {
            await verificarEncuestaForzado(nombre, correo, clave, true);
        }
    }
    
    function programar() {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(verificar, 800);
    }
    
    inputNombre.addEventListener('input', programar);
    inputCorreo.addEventListener('input', programar);
    if (inputClave) inputClave.addEventListener('input', programar);
    
    setInterval(() => {
        const nombre = inputNombre.value.trim();
        const correo = inputCorreo.value.trim();
        const clave = inputClave?.value.trim() || '';
        if (nombre !== lastValues.nombre || correo !== lastValues.correo || clave !== lastValues.clave) {
            lastValues = { nombre, correo, clave };
            if (nombre && correo && validarEmail(correo)) programar();
        }
    }, 3000);
    
    setTimeout(() => {
        const nombre = inputNombre.value.trim();
        const correo = inputCorreo.value.trim();
        if (nombre && correo && validarEmail(correo)) verificar();
    }, 1000);
}

function configurarBotones() {}

const ThemeManager = {
    init: function() {
        const tema = localStorage.getItem('tema_preferido');
        const btn = document.getElementById('themeToggle');
        if (tema === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (btn) btn.innerHTML = '<span class="theme-text">Modo Claro</span>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (btn) btn.innerHTML = '<span class="theme-text">Modo Oscuro</span>';
        }
        if (btn) btn.onclick = () => this.toggleTheme();
    },
    toggleTheme: function() {
        const temaActual = document.documentElement.getAttribute('data-theme');
        const btn = document.getElementById('themeToggle');
        if (temaActual === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('tema_preferido', 'light');
            if (btn) btn.innerHTML = '<span class="theme-text">Modo Oscuro</span>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('tema_preferido', 'dark');
            if (btn) btn.innerHTML = '<span class="theme-text">Modo Claro</span>';
        }
    }
};

// ===== FUNCIONES DE EXPORTACIÓN =====
function mostrarModalExportacion() {
    if (!todasLasEncuestas || todasLasEncuestas.length === 0) {
        mostrarNotificacion('No hay inscripciones para exportar', 'warning');
        return;
    }
    
    const modalAnterior = document.getElementById('modalExportacion');
    if (modalAnterior) modalAnterior.remove();
    
    const modalHTML = `
        <div class="gestion-modal" id="modalExportacion" style="z-index: 40000;">
            <div class="gestion-contenido" style="max-width: 800px;">
                <div class="gestion-header">
                    <h3><i class="fas fa-download"></i> Exportar Inscripciones</h3>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span class="exportacion-total-seleccionadas">
                            <i class="fas fa-check-circle"></i> <span id="contadorSeleccionadas">0</span> de ${todasLasEncuestas.length}
                        </span>
                        <button class="gestion-cerrar" id="cerrarExportacionBtn"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div class="gestion-body" style="max-height: 80vh; overflow-y: auto;">
                    <div class="exportacion-filtros-bar">
                        <div class="filtro-grupo">
                            <i class="fas fa-search"></i>
                            <input type="text" id="exportFiltroNombre" placeholder="Buscar por nombre..." class="filtro-compacto">
                        </div>
                        <div class="filtro-grupo">
                            <i class="fas fa-calendar-alt"></i>
                            <select id="exportFiltroPeriodo" class="filtro-compacto">
                                <option value="todos">Todos los períodos</option>
                                <option value="verano">Verano 2026</option>
                            </select>
                        </div>
                    </div>
                    <div class="exportacion-acciones-rapidas">
                        <button class="btn-accion" id="seleccionarTodoBtn"><i class="fas fa-check-double"></i> Todo</button>
                        <button class="btn-accion" id="seleccionarNadaBtn"><i class="fas fa-times"></i> Ninguno</button>
                        <span class="separador">|</span>
                        <span class="info-encuestas">Mostrando: <span id="exportMostrando">${todasLasEncuestas.length}</span> inscripciones</span>
                    </div>
                    <div class="exportacion-lista" id="exportacionListaEncuestas"></div>
                </div>
                <div class="gestion-footer" style="justify-content: space-between;">
                    <button class="btn btn-secondary" id="cancelarExportacionBtn"><i class="fas fa-times"></i> Cancelar</button>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn btn-success" id="exportarExcelBtn"><i class="fas fa-file-excel"></i> Excel</button>
                        <button class="btn btn-danger" id="exportarPDFBtn"><i class="fas fa-file-pdf"></i> PDF</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    let encuestasFiltradasExport = [...todasLasEncuestas];
    let encuestasSeleccionadas = new Set(todasLasEncuestas.map(e => e.id));
    
    renderizarListaExportacionCompacta(encuestasFiltradasExport, encuestasSeleccionadas);
    
    document.getElementById('cerrarExportacionBtn')?.addEventListener('click', () => {
        document.getElementById('modalExportacion').remove();
    });
    document.getElementById('cancelarExportacionBtn')?.addEventListener('click', () => {
        document.getElementById('modalExportacion').remove();
    });
    
    const filtroNombre = document.getElementById('exportFiltroNombre');
    const filtroPeriodo = document.getElementById('exportFiltroPeriodo');
    
    const actualizarFiltros = () => {
        const termino = filtroNombre.value.toLowerCase().trim();
        const periodo = filtroPeriodo.value;
        
        encuestasFiltradasExport = todasLasEncuestas.filter(enc => {
            const nombre = enc.profesor?.nombre?.toLowerCase() || '';
            if (termino && !nombre.includes(termino)) return false;
            if (periodo !== 'todos' && enc.periodo !== periodo) return false;
            return true;
        });
        
        document.getElementById('exportMostrando').textContent = encuestasFiltradasExport.length;
        renderizarListaExportacionCompacta(encuestasFiltradasExport, encuestasSeleccionadas);
    };
    
    filtroNombre.addEventListener('input', () => setTimeout(actualizarFiltros, 300));
    filtroPeriodo.addEventListener('change', actualizarFiltros);
    
    document.getElementById('seleccionarTodoBtn')?.addEventListener('click', () => {
        encuestasFiltradasExport.forEach(enc => encuestasSeleccionadas.add(enc.id));
        renderizarListaExportacionCompacta(encuestasFiltradasExport, encuestasSeleccionadas);
        document.getElementById('contadorSeleccionadas').textContent = encuestasSeleccionadas.size;
    });
    
    document.getElementById('seleccionarNadaBtn')?.addEventListener('click', () => {
        encuestasFiltradasExport.forEach(enc => encuestasSeleccionadas.delete(enc.id));
        renderizarListaExportacionCompacta(encuestasFiltradasExport, encuestasSeleccionadas);
        document.getElementById('contadorSeleccionadas').textContent = encuestasSeleccionadas.size;
    });
    
    document.getElementById('exportarExcelBtn')?.addEventListener('click', () => {
        const aExportar = todasLasEncuestas.filter(enc => encuestasSeleccionadas.has(enc.id));
        if (aExportar.length === 0) {
            mostrarNotificacion('Selecciona al menos una inscripción', 'warning');
            return;
        }
        document.getElementById('modalExportacion').remove();
        exportarAExcelPersonalizado(aExportar);
    });
    
    document.getElementById('exportarPDFBtn')?.addEventListener('click', () => {
        const aExportar = todasLasEncuestas.filter(enc => encuestasSeleccionadas.has(enc.id));
        if (aExportar.length === 0) {
            mostrarNotificacion('Selecciona al menos una inscripción', 'warning');
            return;
        }
        document.getElementById('modalExportacion').remove();
        exportarAPDFPersonalizado(aExportar);
    });
}

function renderizarListaExportacionCompacta(encuestas, seleccionadas) {
    const container = document.getElementById('exportacionListaEncuestas');
    if (!container) return;
    
    if (encuestas.length === 0) {
        container.innerHTML = `<div class="resultado-sin-resultados" style="padding: 30px; text-align: center;">
            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <p>No hay inscripciones con los filtros seleccionados</p>
        </div>`;
        return;
    }
    
    let html = '';
    encuestas.forEach(enc => {
        const profesor = enc.profesor || {};
        const fecha = enc.fecha ? new Date(enc.fecha).toLocaleDateString('es-MX') : 'N/A';
        const estaSeleccionada = seleccionadas.has(enc.id) ? 'checked' : '';
        const nombre = profesor.nombre || 'Nombre no especificado';
        const correo = profesor.correo || 'Sin correo';
        const materiasCount = enc.materias?.length || 0;
        const horariosCount = enc.horarios?.length || 0;
        
        const nombreSeguro = (nombre || '').replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
        const correoSeguro = (correo || '').replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
        
        html += `
            <div class="exportacion-item" style="display: flex; align-items: center; padding: 12px; border-bottom: 1px solid #e0e0e0; gap: 15px;">
                <input type="checkbox" class="exportacion-checkbox" data-id="${enc.id}" ${estaSeleccionada} style="width: 18px; height: 18px; cursor: pointer;">
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <strong style="font-size: 1rem;">${nombreSeguro}</strong>
                        <span style="background: #27ae60; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem;">Verano 2026</span>
                    </div>
                    <div style="display: flex; gap: 15px; font-size: 0.75rem; color: #666; margin-top: 5px; flex-wrap: wrap;">
                        <span><i class="fas fa-envelope"></i> ${correoSeguro}</span>
                        <span><i class="fas fa-calendar"></i> ${fecha}</span>
                        <span><i class="fas fa-book"></i> ${materiasCount} cursos</span>
                        <span><i class="fas fa-clock"></i> ${horariosCount} horarios</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    document.querySelectorAll('.exportacion-checkbox').forEach(cb => {
        cb.addEventListener('change', function() {
            const id = this.dataset.id;
            if (this.checked) {
                seleccionadas.add(id);
            } else {
                seleccionadas.delete(id);
            }
            const contadorSpan = document.getElementById('contadorSeleccionadas');
            if (contadorSpan) contadorSpan.textContent = seleccionadas.size;
        });
    });
    
    const contadorSpan = document.getElementById('contadorSeleccionadas');
    if (contadorSpan) contadorSpan.textContent = seleccionadas.size;
}

async function exportarAExcelPersonalizado(encuestas) {
    try {
        mostrarNotificacion(`Exportando ${encuestas.length} inscripciones a Excel...`, 'info');
        
        const wb = XLSX.utils.book_new();
        
        const resumenData = [['Fecha', 'Hora', 'Profesor', 'Correo', 'Clave SIE', 'Teléfono', 'Tipo de Plaza', 'Horas', 'Cursos', 'Horarios']];
        
        encuestas.forEach(enc => {
            const profesor = enc.profesor || {};
            const fechaObj = enc.fecha ? new Date(enc.fecha) : null;
            const fecha = fechaObj ? fechaObj.toLocaleDateString('es-MX') : 'N/A';
            const hora = fechaObj ? fechaObj.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : 'N/A';
            
            let tipoPlaza = '';
            switch(profesor.tipoPlaza) {
                case 'tiempo_completo': tipoPlaza = 'Tiempo completo'; break;
                case 'tres_cuartos': tipoPlaza = '3/4 de tiempo'; break;
                case 'medio_tiempo': tipoPlaza = 'Medio tiempo'; break;
                case 'por_horas': tipoPlaza = 'Por horas-base'; break;
                case 'honorarios': tipoPlaza = 'Honorarios'; break;
                case 'nuevo_ingreso': tipoPlaza = 'Nuevo ingreso'; break;
                default: tipoPlaza = profesor.tipoPlaza || '';
            }
            
            resumenData.push([
                fecha, hora, profesor.nombre || '', profesor.correo || '',
                profesor.codigo || '', profesor.telefono || '', tipoPlaza,
                profesor.horasPlaza || '', enc.materias?.length || 0, enc.horarios?.length || 0
            ]);
        });
        
        const wsResumen = XLSX.utils.aoa_to_sheet(resumenData);
        wsResumen['!cols'] = [{ wch: 12 }, { wch: 8 }, { wch: 35 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 10 }, { wch: 10 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsResumen, 'Resumen');
        
        const cursosData = [['Fecha', 'Hora', 'Profesor', 'Curso', 'Nivel', 'Carrera', 'Semestre', 'Horas']];
        
        encuestas.forEach(enc => {
            const profesor = enc.profesor || {};
            const fechaObj = enc.fecha ? new Date(enc.fecha) : null;
            const fecha = fechaObj ? fechaObj.toLocaleDateString('es-MX') : 'N/A';
            const hora = fechaObj ? fechaObj.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : 'N/A';
            
            if (enc.materias) {
                enc.materias.forEach(m => {
                    const nivel = { alta: 'Alta', media: 'Media', baja: 'Baja' }[m.nivel] || 'No especificado';
                    if (m.carreras && m.carreras.length > 0) {
                        m.carreras.forEach(c => {
                            cursosData.push([
                                fecha, hora, profesor.nombre || '', m.nombre, nivel,
                                c.carrera || '', c.semestre || '', c.horas || ''
                            ]);
                        });
                    } else {
                        cursosData.push([fecha, hora, profesor.nombre || '', m.nombre, nivel, '', '', '']);
                    }
                });
            }
        });
        
        const wsCursos = XLSX.utils.aoa_to_sheet(cursosData);
        wsCursos['!cols'] = [{ wch: 12 }, { wch: 8 }, { wch: 35 }, { wch: 40 }, { wch: 12 }, { wch: 30 }, { wch: 10 }, { wch: 10 }];
        XLSX.utils.book_append_sheet(wb, wsCursos, 'Cursos');
        
        const horariosData = [['Fecha', 'Hora', 'Profesor', 'Día', 'Bloque Horario']];
        
        encuestas.forEach(enc => {
            const profesor = enc.profesor || {};
            const fechaObj = enc.fecha ? new Date(enc.fecha) : null;
            const fecha = fechaObj ? fechaObj.toLocaleDateString('es-MX') : 'N/A';
            const hora = fechaObj ? fechaObj.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : 'N/A';
            
            if (enc.horarios) {
                enc.horarios.forEach(h => {
                    horariosData.push([fecha, hora, profesor.nombre || '', h.dia || '', h.texto || '']);
                });
            }
        });
        
        const wsHorarios = XLSX.utils.aoa_to_sheet(horariosData);
        wsHorarios['!cols'] = [{ wch: 12 }, { wch: 8 }, { wch: 35 }, { wch: 12 }, { wch: 20 }];
        XLSX.utils.book_append_sheet(wb, wsHorarios, 'Horarios');
        
        const fecha = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `Inscripciones_Verano_${fecha}_${encuestas.length}.xlsx`);
        
        mostrarNotificacion(`Excel generado: ${encuestas.length} inscripciones`, 'success');
    } catch (error) {
        console.error('Error exportando a Excel:', error);
        mostrarNotificacion('Error al generar Excel', 'error');
    }
}

async function exportarAPDFPersonalizado(encuestas) {
    try {
        mostrarNotificacion(`Exportando ${encuestas.length} inscripciones a PDF...`, 'info');
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('portrait', 'mm', 'a4');
        
        for (let i = 0; i < encuestas.length; i++) {
            if (i > 0) doc.addPage();
            
            const enc = encuestas[i];
            const profesor = enc.profesor || {};
            let yPos = 20;
            
            doc.setFontSize(16);
            doc.setTextColor(0, 59, 111);
            doc.text('INSCRIPCIÓN CURSOS DE VERANO', 105, yPos, { align: 'center' });
            yPos += 10;
            
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            const fecha = enc.fecha ? new Date(enc.fecha).toLocaleString('es-MX') : 'Fecha desconocida';
            doc.text(`Fecha de registro: ${fecha}`, 105, yPos, { align: 'center' });
            yPos += 15;
            
            doc.setFillColor(240, 248, 255);
            doc.rect(15, yPos, 180, 50, 'F');
            doc.setDrawColor(0, 119, 190);
            doc.setLineWidth(0.5);
            doc.rect(15, yPos, 180, 50, 'D');
            
            doc.setFontSize(12);
            doc.setTextColor(0, 59, 111);
            doc.text('DATOS DEL PROFESOR', 20, yPos + 8);
            
            doc.setFontSize(10);
            doc.setTextColor(51, 51, 51);
            doc.text(`Nombre: ${profesor.nombre || 'No especificado'}`, 20, yPos + 20);
            doc.text(`Correo: ${profesor.correo || 'No especificado'}`, 20, yPos + 30);
            doc.text(`Clave: ${profesor.codigo || 'No especificada'}`, 20, yPos + 40);
            doc.text(`Teléfono: ${profesor.telefono || 'No especificado'}`, 110, yPos + 20);
            doc.text(`Tipo de plaza: ${profesor.tipoPlaza || 'No especificada'}`, 110, yPos + 30);
            
            yPos += 60;
            
            doc.setFillColor(240, 248, 255);
            doc.rect(15, yPos, 180, 8, 'F');
            doc.setFontSize(11);
            doc.setTextColor(0, 59, 111);
            doc.text('CURSOS SELECCIONADOS', 20, yPos + 6);
            yPos += 12;
            
            if (enc.materias && enc.materias.length > 0) {
                enc.materias.forEach((m, idx) => {
                    if (yPos > 260) {
                        doc.addPage();
                        yPos = 20;
                    }
                    const nivel = { alta: 'Alta', media: 'Media', baja: 'Baja' }[m.nivel] || 'No especificado';
                    const carreras = m.carreras ? m.carreras.map(c => `${c.carrera} (Sem ${c.semestre})${c.horas ? ` ${c.horas}h` : ''}`).join(', ') : '';
                    
                    doc.setFontSize(9);
                    doc.setTextColor(51, 51, 51);
                    doc.text(`${idx + 1}. ${m.nombre} - Nivel: ${nivel}`, 20, yPos);
                    if (carreras) {
                        doc.setFontSize(8);
                        doc.setTextColor(100, 100, 100);
                        doc.text(`   ${carreras}`, 20, yPos + 5);
                        yPos += 10;
                    } else {
                        yPos += 6;
                    }
                });
                yPos += 5;
            } else {
                doc.text('No hay cursos seleccionados', 20, yPos);
                yPos += 10;
            }
            
            doc.setFillColor(240, 248, 255);
            doc.rect(15, yPos, 180, 8, 'F');
            doc.setFontSize(11);
            doc.setTextColor(0, 59, 111);
            doc.text('HORARIOS SELECCIONADOS', 20, yPos + 6);
            yPos += 15;
            
            if (enc.horarios && enc.horarios.length > 0) {
                const horariosPorDia = { Lunes: [], Martes: [], Miércoles: [], Jueves: [], Viernes: [] };
                enc.horarios.forEach(h => {
                    const dia = h.dia === 'Miercoles' ? 'Miércoles' : h.dia;
                    if (horariosPorDia[dia]) horariosPorDia[dia].push(parseInt(h.hora));
                });
                
                Object.keys(horariosPorDia).forEach(dia => horariosPorDia[dia].sort((a, b) => a - b));
                
                doc.setFontSize(8);
                doc.setTextColor(51, 51, 51);
                
                const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
                let xPos = 20;
                dias.forEach(dia => {
                    doc.text(dia.substring(0, 3), xPos, yPos);
                    xPos += 30;
                });
                yPos += 5;
                
                for (let hora = 7; hora <= 21; hora++) {
                    xPos = 20;
                    dias.forEach(dia => {
                        const seleccionado = horariosPorDia[dia]?.includes(hora);
                        if (seleccionado) {
                            doc.setFillColor(0, 119, 190);
                            doc.rect(xPos, yPos - 3, 25, 5, 'F');
                            doc.setTextColor(255, 255, 255);
                            doc.text(`${hora}-${hora + 1}`, xPos + 2, yPos);
                        } else {
                            doc.setDrawColor(200, 200, 200);
                            doc.rect(xPos, yPos - 3, 25, 5, 'S');
                            doc.setTextColor(150, 150, 150);
                            doc.text(`${hora}-${hora + 1}`, xPos + 2, yPos);
                        }
                        xPos += 30;
                    });
                    yPos += 6;
                    if (yPos > 270) {
                        doc.addPage();
                        yPos = 20;
                    }
                }
                yPos += 5;
                doc.setTextColor(51, 51, 51);
                doc.text(`Total de bloques seleccionados: ${enc.horarios.length}`, 20, yPos);
            } else {
                doc.text('No hay horarios seleccionados', 20, yPos);
            }
        }
        
        const fecha = new Date().toISOString().split('T')[0];
        doc.save(`Inscripciones_Verano_${fecha}_${encuestas.length}.pdf`);
        
        mostrarNotificacion(`PDF generado: ${encuestas.length} inscripciones`, 'success');
    } catch (error) {
        console.error('Error exportando a PDF:', error);
        mostrarNotificacion('Error al generar PDF', 'error');
    }
}

// ===== INICIALIZACIÓN PRINCIPAL =====
async function inicializarAplicacion() {
    periodoActivo = await obtenerPeriodoGlobal();
    
    await Promise.allSettled([cargarMateriasGlobales(), cargarProfesoresGlobales()]);
    
    if (periodoActivo === 'ene-jun') carrerasData = carrerasDataENEJUNTrabajo;
    else carrerasData = carrerasDataAGODICTrabajo;
    todasLasMaterias = generarListaGlobalMaterias();
    
    inicializarDatosProfesor();
    inicializarBuscadorProfesores();
    inicializarSistemaMaterias();
    inicializarHorarios();
    inicializarModoAdmin();
    configurarModal();
    configurarModalRecuperarEncuesta();
    actualizarOpcionesSemestre();
    setTimeout(() => actualizarInterfazPeriodo(), 100);
    
    inicializarDetectorUnificado();
    
    setTimeout(() => {
        configurarBotonesBorrador();
        if (autoSaveInterval) clearInterval(autoSaveInterval);
        autoSaveInterval = setInterval(guardarBorrador, 15000);
    }, 300);
    
    setTimeout(() => {
        const borrador = cargarBorrador();
        if (borrador && (borrador.profesor?.nombre || borrador.materias?.length)) mostrarModalBorrador(borrador);
    }, 800);
    
    if (ES_VERANO) {
        const periodoSelector = document.querySelector('.periodo-selector');
        const periodoBadge = document.getElementById('periodoBadge');
        const btnENEJUN = document.getElementById('periodoENEJUN');
        const btnAGODIC = document.getElementById('periodoAGODIC');
        if (periodoSelector) periodoSelector.style.display = 'none';
        if (periodoBadge) periodoBadge.style.display = 'none';
        if (btnENEJUN) btnENEJUN.style.display = 'none';
        if (btnAGODIC) btnAGODIC.style.display = 'none';
    }
    
    ThemeManager.init();
}

document.addEventListener('DOMContentLoaded', inicializarAplicacion);