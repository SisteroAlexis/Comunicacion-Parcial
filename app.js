/**
 * PORTAL DE ESTUDIO: COMUNICACIONES DE REDES
 * Plataforma interactiva diseñada para la preparación óptima del examen parcial.
 * Contiene los 7 módulos desglosados, Flashcards, Simulador de Parcial y Carta de Smith interactiva.
 */

// =============================================================================
// BANCO DE DATOS COMPLETO (7 MÓDULOS TRANSCRITOS DE LOS APUNTES ORIGINALES)
// =============================================================================
const STUDY_MODULES = [
  {
    id: "01",
    name: "01 · Electricidad Básica y Ley de Ohm",
    photo: "../IMG_20261124_093328.jpg",
    questions: [
      {
        id: "01-a",
        q: "Definí tensión, corriente y resistencia, e indicá qué representa cada magnitud en la analogía del agua.",
        ans: "• Tensión (Voltaje - V): Es la fuerza que impulsa o permite el movimiento de electrones de un punto a otro a través de un conductor. Su unidad es el Voltio (V). En la analogía hidráulica representa la presión del agua.\n• Corriente (Intensidad - I): Es la cantidad o flujo de electrones que se desplazan por segundo a través de una sección del conductor. Su unidad es el Amperio (A). En el agua representa el caudal (litros por segundo).\n• Resistencia (R): Es la oposición o dificultad física que ofrecen los materiales al paso de la corriente. Su unidad es el Ohmio (Ω). En el agua representa el estrechamiento o fricción de la tubería.",
        teacherHint: "Para el examen oral: Voltaje = Presión (empuja), Corriente = Caudal (lo que circula), Resistencia = Grifo o caño angosto (lo que frena).",
        photo: "../IMG_20261124_093328.jpg"
      },
      {
        id: "01-b",
        q: "Explicá cómo se relacionan tensión, corriente y resistencia mediante la Ley de Ohm.",
        ans: "La Ley de Ohm establece que en un circuito eléctrico la corriente (I) es directamente proporcional a la tensión aplicada (V) e inversamente proporcional a la resistencia del circuito (R).\nFórmula fundamental: V = I · R  =>  I = V / R.",
        teacherHint: "Visualiza el triángulo de Ohm: tapa la letra que buscas para obtener la fórmula (tapa I y ves V sobre R).",
        photo: "../IMG_20261124_093328.jpg"
      },
      {
        id: "01-c",
        q: "¿Qué ocurre con la corriente si aumenta la tensión y la resistencia permanece constante? Justificá.",
        ans: "Si la tensión (V) aumenta y la resistencia (R) se mantiene fija, la corriente (I) aumenta en la misma proporción. Justificación: según I = V / R, I es directamente proporcional a V. Por ejemplo, si duplicamos la tensión a 2V, la corriente se duplicará a 2I.",
        teacherHint: "A mayor fuerza de empuje con el mismo freno, circularán más electrones.",
        photo: "../IMG_20261124_093328.jpg"
      },
      {
        id: "01-d",
        q: "¿Qué ocurre con la corriente si aumenta la resistencia y la tensión permanece constante? Justificá.",
        ans: "Si la resistencia (R) aumenta manteniendo la tensión (V) constante, la corriente (I) disminuye. Justificación: I es inversamente proporcional a R (I = V / R). A mayor resistencia u obstrucción, menor cantidad de electrones pueden circular.",
        teacherHint: "Si cierras más el grifo sin cambiar la presión del tanque, el caudal de agua baja.",
        photo: "../IMG_20261124_093328.jpg"
      },
      {
        id: "01-e",
        q: "Compará la corriente continua (DC) y la corriente alterna (AC) según su comportamiento en el tiempo.",
        ans: "• Corriente Continua (DC): La tensión y la corriente son constantes e invariables en el tiempo, manteniendo siempre la misma polaridad (por ejemplo, una pila o batería de 5V o 12V; su gráfico V vs t es una línea horizontal recta).\n• Corriente Alterna (AC): La magnitud y el sentido de la corriente varían de forma cíclica y periódica en el tiempo, subiendo a un valor positivo, bajando a cero y pasando a valores negativos (por ejemplo, la red eléctrica domiciliaria de 220V a 50Hz, cuya gráfica es una onda senoidal).",
        teacherHint: "DC viaja siempre en un solo sentido. AC oscila yendo y viniendo alternativamente.",
        photo: "../IMG_20261124_093328.jpg"
      },
      {
        id: "01-f",
        q: "¿Qué significan oscilación y ciclo? ¿En qué se diferencian?",
        ans: "• Oscilación: Es el movimiento repetitivo de vaivén ('ir y volver') de una magnitud o partícula alrededor de un punto central de equilibrio.\n• Ciclo: Es el recorrido completo de una oscilación repetitiva que inicia y finaliza en el mismo punto de fase (por ejemplo: parte de cero, sube al máximo, cruza por cero, baja al mínimo y regresa a cero).\n• Diferencia: Se aprecia en ondas no armónicas o pulsos aislados: pueden presentar oscilaciones sin tener un comportamiento cíclico perfectamente periódico.",
        teacherHint: "Un ciclo es la unidad completa que se repite; la oscilación es el acto físico de vibrar.",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "01-g",
        q: "¿Qué representa la frecuencia de una señal? Indicá su unidad y el significado de kHz, MHz y GHz.",
        ans: "La frecuencia representa la cantidad de ciclos completos u oscilaciones que realiza una señal en un segundo. Su unidad en el Sistema Internacional es el Hertzio (Hz = 1 ciclo/segundo).\n• 1 kHz (Kilohertzio) = 1.000 Hz (10³ Hz)\n• 1 MHz (Megahertzio) = 1.000.000 Hz (10⁶ Hz)\n• 1 GHz (Gigahertzio) = 1.000.000.000 Hz (10⁹ Hz, mil millones de ciclos por segundo).",
        teacherHint: "En radio y redes celulares usamos MHz y GHz (Wi-Fi en 2.4 GHz y 5 GHz).",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "01-h",
        q: "¿Qué es el período y qué relación tiene con la frecuencia?",
        ans: "El período (T) es el tiempo exacto que tarda una onda en completar un solo ciclo. Su unidad es el segundo (s). El período y la frecuencia son inversamente proporcionales: T = 1 / f y f = 1 / T. Si la frecuencia aumenta, el período disminuye.",
        teacherHint: "Si una señal oscila más rápido (f alta), cada ciclo dura menos tiempo (T bajo).",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "01-i",
        q: "¿Qué representa la amplitud de una señal? ¿Puede variar sin que cambie su frecuencia?",
        ans: "La amplitud es el valor máximo o elongación pico que alcanza la señal con respecto a su posición de reposo o punto de equilibrio (0). Representa la intensidad, energía o potencia de la onda. Sí, la amplitud puede variar de forma totalmente independiente sin que la frecuencia cambie (este principio es la base de la modulación AM).",
        teacherHint: "En el dial de una radio AM, el volumen o potencia es la amplitud, mientras que la sintonía es la frecuencia.",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "01-j",
        q: "Diferenciá frecuencia de velocidad de propagación de una onda.",
        ans: "• Frecuencia (f): Es la rapidez temporal con la que la fuente oscila en un punto fijo (cuántos ciclos hace por segundo, en Hz).\n• Velocidad de propagación (v): Es la rapidez espacial con la que la energía de la onda se desplaza a través del medio físico (en metros/segundo, calculada como v = λ · f).",
        teacherHint: "La frecuencia la define la fuente que genera la señal; la velocidad la define el medio donde viaja.",
        photo: "../IMG_20261124_093410.jpg"
      }
    ]
  },
  {
    id: "02",
    name: "02 · Física de Ondas y Perturbaciones",
    photo: "../IMG_20261124_093410.jpg",
    questions: [
      {
        id: "02-a",
        q: "En el ejemplo de la piedra que cae al agua, ¿por qué no debe confundirse el movimiento del agua con la propagación de la onda?",
        ans: "Porque las ondas transportan ENERGÍA e INFORMACIÓN, NO MATERIA. El agua no viaja hacia la orilla junto con la onda; las partículas de agua únicamente oscilan arriba y abajo en torno a su punto de equilibrio local, mientras que lo que realmente viaja y se expande radialmente es la perturbación energética.",
        teacherHint: "Un corcho en el agua no avanza con la ola, sólo sube y baja en el mismo sitio.",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "02-b",
        q: "¿Cuál es la diferencia entre la velocidad de fase de la onda y la velocidad de cada partícula del medio?",
        ans: "• Velocidad de fase (v): Es la velocidad con la que se desplaza la forma de onda y su energía a través del espacio (en dirección horizontal en el caso del agua).\n• Velocidad de partícula: Es la velocidad instantánea con la que vibra cada elemento del medio arriba y abajo alrededor de su posición de reposo (en dirección vertical), cambiando continuamente de dirección.",
        teacherHint: "Velocidad de fase es constante hacia adelante; la velocidad de partícula se acelera y frena en vaivén.",
        photo: "../IMG_20261124_093410.jpg"
      },
      {
        id: "02-c",
        q: "Indicá los tres elementos necesarios para que se propague una onda mecánica.",
        ans: "1) Una fuente emisora o perturbación inicial.\n2) Un medio material elástico continuo que transporte la perturbación (agua, aire, cuerda, metal).\n3) Un mecanismo físico o fuerzas intermoleculares restauradoras que conecten las partículas entre sí y permitan transferir la energía.",
        teacherHint: "A diferencia de la luz o las ondas de radio (electromagnéticas), las ondas mecánicas NUNCA se propagan en el vacío.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-d",
        q: "Explicá la diferencia entre una onda transversal y una longitudinal usando ejemplos.",
        ans: "• Onda Transversal: Las partículas del medio oscilan en dirección perpendicular a la dirección de propagación de la onda. Ejemplo: un pulso en una cuerda tensa o las olas en la superficie del agua.\n• Onda Longitudinal: Las partículas oscilan en la misma dirección (paralela) en que viaja la onda, mediante compresiones y rarefacciones. Ejemplo: las ondas sonoras en el aire.",
        teacherHint: "Transversal = 90° (cuerda hacia arriba, onda hacia adelante). Longitudinal = 0° (resorte o sonido que comprime hacia adelante).",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-e",
        q: "¿Qué es una vibración y alrededor de qué posición se produce?",
        ans: "Una vibración es un movimiento oscilatorio y repetitivo en el tiempo de una partícula o sistema físico alrededor de su posición central de equilibrio estable.",
        teacherHint: "Todo movimiento vibratorio necesita una fuerza que intente devolver la partícula al reposo.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-f",
        q: "Definí posición de equilibrio e indicá cuándo el desplazamiento es positivo, negativo o cero.",
        ans: "Es el estado de reposo natural de un cuerpo o partícula cuando sobre él no actúa ninguna fuerza neta o perturbación.\n• Desplazamiento = 0: En la posición de equilibrio central.\n• Desplazamiento positivo (+): Cuando la partícula se eleva o desplaza hacia un extremo (cresta o elongación positiva).\n• Desplazamiento negativo (-): Cuando se desplaza en sentido opuesto bajo la línea de equilibrio (valle o elongación negativa).",
        teacherHint: "Imagina el eje cartesiano Y: 0 en el medio, +A arriba y -A abajo.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-g",
        q: "¿Qué es una perturbación? Explicá cómo un pulso cambia su posición con el paso del tiempo.",
        ans: "Una perturbación es cualquier alteración transitoria del estado de equilibrio natural del medio. Un pulso es una perturbación única y aislada que se desplaza manteniendo su perfil a lo largo del tiempo, de modo que su posición espacial en función del tiempo x(t) avanza a una velocidad constante v según la ecuación x = v · t.",
        teacherHint: "Un solo sacudón a una cuerda es un pulso; sacudidas continuas crean una onda periódica.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-h",
        q: "¿Qué significa MAS? Explicá por separado las palabras movimiento, armónico y simple.",
        ans: "MAS significa Movimiento Armónico Simple:\n• Movimiento: Porque la posición de la partícula cambia continuamente en función del tiempo.\n• Armónico: Porque la ley matemática que describe su trayectoria se modela mediante funciones trigonométricas armónicas (senos y cosenos) de manera periódica y regular.\n• Simple: Porque se estudia en una sola dimensión espacial y sin considerar pérdidas por rozamiento o fricción (modelo físico ideal).",
        teacherHint: "Es el modelo matemático perfecto sobre el que se construye toda la teoría de ondas.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-i",
        q: "Describí las etapas de un movimiento periódico desde el equilibrio hasta completar una oscilación.",
        ans: "1. Parte de la posición de equilibrio (0).\n2. Se desplaza hasta alcanzar la amplitud máxima positiva (+A).\n3. Desciende cruzando nuevamente por la posición de equilibrio (0).\n4. Continúa descendiendo hasta alcanzar la amplitud mínima o máxima negativa (-A).\n5. Retorna finalmente a la posición de equilibrio (0), completando 1 ciclo de oscilación para reiniciar el proceso.",
        teacherHint: "Equilibrio -> Cresta -> Equilibrio -> Valle -> Equilibrio = 1 ciclo completo (360° o 2π radianes).",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "02-j",
        q: "Explicá cómo se relacionan velocidad, longitud de onda y frecuencia, y cómo influyen la tensión y la masa por unidad de longitud en una cuerda.",
        ans: "• Relación cinemática fundamental: v = λ · f. La velocidad es el producto de la longitud de onda y la frecuencia.\n• En una cuerda tensa: la velocidad de propagación está determinada por las propiedades físicas del medio: v = √(Ft / μ), donde Ft es la fuerza de tensión de la cuerda y μ es la densidad lineal de masa (masa/longitud).\n• Conclusión clave: La velocidad de propagación depende EXCLUSIVAMENTE de las propiedades físicas del medio (tensión y masa), y NO depende de qué tan fuerte o rápido sacudas la cuerda.",
        teacherHint: "Pregunta trampa típica de examen: '¿Si muevo la cuerda con más fuerza va más rápido?' ¡FALSO! Solo aumentas la amplitud, la velocidad depende solo de la tensión y grosor de la cuerda.",
        photo: "../IMG_20261124_093422.jpg"
      }
    ]
  },
  {
    id: "03",
    name: "03 · Repaso Integrador de Radiofrecuencia",
    photo: "../IMG_20261124_093422.jpg",
    questions: [
      {
        id: "03-a",
        q: "Explicá cómo se distinguen tensión, corriente y resistencia usando la analogía hidráulica en RF.",
        ans: "• Tensión: Presión del agua que impulsa el flujo.\n• Corriente: Caudal de agua circulante por unidad de tiempo.\n• Resistencia: Obstrucción o reducción de sección que frena el caudal.",
        teacherHint: "En RF, la resistencia se generaliza al concepto de impedancia al incorporar la reactancia.",
        photo: "../IMG_20261124_093422.jpg"
      },
      {
        id: "03-b",
        q: "¿Qué enseña la Ley de Ohm acerca de los efectos de aumentar V o R sobre I?",
        ans: "• Aumentar V manteniendo R constante: aumenta I en forma lineal y directamente proporcional.\n• Aumentar R manteniendo V constante: disminuye I en forma inversamente proporcional.",
        teacherHint: "Fórmula de cabecera: I = V / R.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-c",
        q: "¿Cómo se diferencian una señal continua (DC) y una señal alterna (AC)?",
        ans: "• DC (Continua): Nivel de voltaje fijo y unidireccional en el tiempo (ej. pila de 5V o batería de 12V).\n• AC (Alterna): Voltaje oscilante senoidal que invierte periódicamente su polaridad y pasa por cero (ej. red de 220V 50Hz domiciliaria o 380V trifásica industrial).",
        teacherHint: "Las señales de telecomunicaciones y radiofrecuencia son siempre corrientes alternas de muy alta frecuencia.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-d",
        q: "¿Qué relación existe entre oscilación, ciclo y propagación de una onda?",
        ans: "Toda onda en telecomunicaciones integra estas tres propiedades:\n1) Oscilación: Movimiento físico de subir y bajar respecto al equilibrio.\n2) Ciclo: La unidad geométrica repetitiva completa que inicia y termina en el mismo punto.\n3) Propagación: La velocidad con la que la energía electromagnética viaja a través del espacio.",
        teacherHint: "Oscilación = vibración local; Ciclo = patrón repetitivo; Propagación = viaje de la energía.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-e",
        q: "¿Qué es el período? Explicá qué ocurre con T cuando aumenta f.",
        ans: "El período (T) es el tiempo en segundos para completar 1 ciclo. Si la frecuencia (f) aumenta, el período (T) disminuye porque T = 1 / f.",
        teacherHint: "A mayor número de oscilaciones por segundo, menos tiempo dura cada oscilación.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-f",
        q: "¿Por qué la amplitud y la frecuencia describen propiedades distintas de una señal?",
        ans: "Porque describen dos dimensiones físicas independientes:\n• La amplitud mide la magnitud o intensidad máxima (la potencia o altura de voltaje en Voltios).\n• La frecuencia mide la cadencia temporal (la rapidez con que se repiten los ciclos por segundo en Hertzios).",
        teacherHint: "Puedes tener una señal de 220V a 50Hz o de 12V a 50Hz: misma frecuencia pero diferente amplitud.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-g",
        q: "¿En qué se diferencia la velocidad de propagación de la frecuencia de oscilación?",
        ans: "• La velocidad (v en m/s) mide qué tan rápido viaja la energía a través del espacio o cable.\n• La frecuencia (f en Hz) mide el número de repeticiones temporales por segundo que oscila la onda.",
        teacherHint: "En el aire todas las señales de radio viajan a la misma velocidad (velocidad de la luz c), independientemente de su frecuencia.",
        photo: "../IMG_20261124_093437.jpg"
      },
      {
        id: "03-h",
        q: "¿Qué es la longitud de onda y cómo se relaciona con la frecuencia?",
        ans: "La longitud de onda (λ) es la distancia física espacial entre dos crestas o puntos equivalentes consecutivos de la onda (medida en metros o centímetros). Se relaciona de forma inversamente proporcional con la frecuencia: v = λ · f  =>  λ = v / f. A mayor frecuencia, menor longitud de onda.",
        teacherHint: "Antenas de alta frecuencia (como 5G o Wi-Fi) son muy pequeñas porque su longitud de onda es de apenas milímetros o centímetros.",
        photo: "../IMG_20261124_093437.jpg"
      }
    ]
  },
  {
    id: "04",
    name: "04 · ROE (VSWR), Pérdida de Retorno y Reflexión",
    photo: "../IMG_20261124_093445.jpg",
    questions: [
      {
        id: "04-a",
        q: "Describí el recorrido de la energía desde el transmisor hasta la carga en un sistema de RF.",
        ans: "En un sistema de RF, la energía generada en el Transmisor viaja como una 'onda incidente' a través de la Línea de Transmisión (cable coaxial) hacia la Carga (antena). Si la impedancia de la carga no está adaptada, parte de la energía rebota en la carga y viaja en sentido contrario hacia el transmisor como una 'onda reflejada'. La interacción entre la onda incidente y reflejada genera la onda estacionaria observada como ROE.",
        teacherHint: "Esquema mental: [Transmisor] ---> Onda Incidente ---> [Línea] ---> [Carga/Antena]\n                               <--- Onda Reflejada <---",
        photo: "../IMG_20261124_093445.jpg"
      },
      {
        id: "04-b",
        q: "¿Qué significa adaptar impedancias y qué ocurre si ZL es distinta de Z0?",
        ans: "• Adaptar impedancias significa igualar la impedancia de la carga a la impedancia característica de la línea de transmisión (ZL = Z0, comúnmente 50 Ω en telecomunicaciones) para lograr la máxima transferencia de potencia sin que se produzcan rebotes (0% de reflexión).\n• Si ZL ≠ Z0: El medio no es homogéneo eléctricamente, por lo que una fracción de la energía rebota hacia el generador generando ondas reflejadas y elevando la ROE.",
        teacherHint: "Impedancia es la resistencia compleja en corriente alterna. Si no coinciden, hay choque y rebote.",
        photo: "../IMG_20261124_093445.jpg"
      },
      {
        id: "04-c",
        q: "Explicá la analogía de la soga atada a una pared para interpretar una onda reflejada.",
        ans: "Si enviamos un pulso de energía por una soga y el extremo está atado firmemente a una pared rígida, la pared no puede absorber ni continuar el movimiento, por lo que la energía rebota y viaja de regreso hacia nuestras manos. Sentimos el tirón de vuelta: esa onda de regreso es exactamente análoga a la onda reflejada en una línea de RF cuando la carga no está adaptada.",
        teacherHint: "La soga es la línea de transmisión; la pared es una carga no adaptada que hace rebotar la onda.",
        photo: "../IMG_20261124_093445.jpg"
      },
      {
        id: "04-d",
        q: "Explicá por qué la ROE ideal es 1:1 y qué indica que su valor aumente.",
        ans: "• ROE 1:1 (Ideal): Expresa la relación entre el voltaje máximo y mínimo en la línea (Vmax : Vmin). Un valor 1:1 significa que Vmax = Vmin, es decir, no existe onda estacionaria ni onda reflejada (100% de la energía es absorbida e irradiada por la antena).\n• Si la ROE aumenta (ej. 1.5:1, 2:1, 3:1): Indica que un porcentaje creciente de la energía está rebotando. Valores entre 1:1 y 1.5:1 se consideran excelentes; 2:1 es el límite aceptable; valores mayores a 3:1 pueden recalentar y quemar los transistores finales de salida del transmisor.",
        teacherHint: "Fórmula matemática: ROE = (1 + |Γ|) / (1 - |Γ|). Para |Γ|=0, ROE = 1/1 = 1:1.",
        photo: "../IMG_20261124_093445.jpg"
      },
      {
        id: "04-e",
        q: "¿Qué es la pérdida de retorno (Return Loss - RL) y en qué unidad se expresa?",
        ans: "La Pérdida de Retorno (Return Loss) es una medida logarítmica de la atenuación de la señal reflejada en comparación con la señal incidente. Se expresa en decibeles (dB).\nFórmula: RL(dB) = -20 · log₁₀(|Γ|).\nIndica cuántos decibeles por debajo de la potencia incidente se encuentra la potencia reflejada.",
        teacherHint: "Dato clave de examen: Entre MÁS ALTO sea el RL en dB, MEJOR es la adaptación (menos se refleja).",
        photo: "../IMG_20261124_093453.jpg"
      },
      {
        id: "04-f",
        q: "Compará la interpretación de una ROE alta con la de una pérdida de retorno baja.",
        ans: "¡Ambas indican MALA ADAPTACIÓN pero con lecturas inversas!:\n• ROE Alta (ej. 3:1): Es malo, significa que hay mucha onda reflejada.\n• Return Loss Bajo (ej. 6 dB): Es malo, significa que la onda reflejada casi no fue atenuada y regresó con mucha potencia.\n• En cambio, un ROE bajo (1.1:1) y un Return Loss alto (26 dB) indican una adaptación excelente.",
        teacherHint: "Regla mnemotécnica del profesor: ROE lo quieres bajito (cerca de 1); RL lo quieres altísimo (más de 20 dB).",
        photo: "../IMG_20261124_093453.jpg"
      },
      {
        id: "04-g",
        q: "¿Qué relación conceptual existe entre Γ, ROE, pérdida de retorno y potencia reflejada?",
        ans: "El Coeficiente de Reflexión (Γ = (ZL - Z0)/(ZL + Z0)) es la variable madre que vincula todas las magnitudes:\n1. |Γ| determina la amplitud de la reflexión (de 0 a 1).\n2. ROE = (1 + |Γ|) / (1 - |Γ|).\n3. Return Loss (dB) = -20 · log₁₀(|Γ|).\n4. Potencia Reflejada (%) = |Γ|² · 100%.\nTodas miden el mismo fenómeno físico (el rebote de energía por desadaptación), pero expresado en distintas escalas.",
        teacherHint: "Si conoces |Γ|, puedes calcular inmediatamente el ROE, el RL y el porcentaje de potencia reflejada.",
        photo: "../IMG_20261124_093453.jpg"
      },
      {
        id: "04-h",
        q: "¿Cómo se realiza una medición de ROE o Return Loss en una instalación de RF?",
        ans: "Se intercala un medidor de ROE / vatímetro direccional (como un Bird 43) o un analizador de antenas / VNA entre el transmisor y la línea hacia la antena, midiendo la potencia incidente (hacia adelante) y la potencia reflejada.",
        teacherHint: "En campo moderno se usa un analizador vectorial portátil para barrer toda la banda de frecuencias.",
        photo: "../IMG_20261124_093453.jpg"
      },
      {
        id: "04-i",
        q: "Nombrá posibles causas de una ROE alta o una pérdida de retorno baja en antenas, cables y conectores.",
        ans: "1) Mala adaptación de impedancias de diseño (ej. antena de 100 Ω conectada a línea de 50 Ω).\n2) Conectores mal soldados, flojos o mal crimpeados.\n3) Deterioro y envejecimiento de materiales: óxido, corrosión o humedad ingresada al cable coaxial.\n4) Cable aplastado o doblado más allá de su radio de curvatura admisible, alterando su impedancia característica.\n5) Interferencia de objetos metálicos o cables de alta tensión cercanos a la antena.",
        teacherHint: "La humedad en el conector es el enemigo número uno de la ROE en instalaciones al aire libre.",
        photo: "../IMG_20261124_093453.jpg"
      },
      {
        id: "04-j",
        q: "¿Qué comprobaciones y criterios de diagnóstico se proponen ante una medición de mala adaptación?",
        ans: "1) Inspección visual de conectores y extremos del cable.\n2) Verificación de continuidad y aislamiento con multímetro.\n3) Medición con carga fantasma patrón de 50 Ω para aislar si la falla está en el cable o en la antena.\n4) Ajuste de sintonía o longitud de la antena.\n5) Mantenimiento preventivo periódico y sellado hermético con cinta autofundente.",
        teacherHint: "Aislar el problema por mitades: si con carga fantasma de 50 Ω la ROE da 1:1, el cable está sano y el problema es la antena.",
        photo: "../IMG_20261124_093453.jpg"
      }
    ]
  },
  {
    id: "05",
    name: "05 · Diagrama de Smith y Análisis de Cargas",
    photo: "../IMG_20261124_093500.jpg",
    questions: [
      {
        id: "05-a",
        q: "¿Para qué sirve el Diagrama de Smith en el estudio de líneas de transmisión y cargas de RF?",
        ans: "Es una herramienta gráfica de ingeniería que permite visualizar impedancias complejas, resolver problemas de adaptación en líneas de transmisión y calcular el coeficiente de reflexión sin tener que realizar cálculos algebraicos complejos y tediosos. Permite ver de un solo vistazo si una carga es inductiva (+), capacitiva (-), abierta o en cortocircuito.",
        teacherHint: "Convierte el plano infinito de impedancias (R + jX) en un círculo cerrado de radio unitario.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-b",
        q: "¿Quién introdujo esta herramienta y qué problema práctico buscaba simplificar?",
        ans: "Fue introducida por el ingeniero estadounidense Phillip H. Smith en 1939 en los Laboratorios Bell. Buscaba simplificar los repetitivos y complejos cálculos matemáticos con números complejos y funciones hiperbólicas requeridos para sintonizar líneas de transmisión y antenas de radio.",
        teacherHint: "En la era antes de las calculadoras digitales, el Diagrama de Smith era la 'computadora gráfica' de los ingenieros de RF.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-c",
        q: "Explicá qué representa la transformación del plano de impedancias al círculo de reflexión.",
        ans: "Representa una transformación bilineal conforme que mapea todo el semiplano derecho de impedancias con resistencia positiva (r ≥ 0) al interior de un círculo de radio 1 (el plano del coeficiente de reflexión complejo Γ). El eje horizontal representa la parte puramente real (resistencia), mientras que las curvas representan la parte imaginaria (reactancia).",
        teacherHint: "Cualquier carga física pasiva real queda confinada dentro del círculo de radio 1.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-d",
        q: "¿Qué representan el centro, el extremo izquierdo y el extremo derecho del diagrama?",
        ans: "• Centro (0, 0): Representa el punto ideal de adaptación perfecta (z = 1 + j0, donde ZL = Z0, |Γ| = 0, ROE = 1:1).\n• Extremo Izquierdo (-1, 0): Representa el Cortocircuito (z = 0 + j0, ZL = 0 Ω, |Γ| = 1, ROE = ∞).\n• Extremo Derecho (+1, 0): Representa el Circuito Abierto (z = ∞, ZL = ∞ Ω, |Γ| = 1, ROE = ∞).",
        teacherHint: "Pregunta FIJA de parcial: ¡Memoriza estas 3 posiciones clave!",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-e",
        q: "¿Qué tipo de impedancias se ubican sobre el eje horizontal y cómo varía r de izquierda a derecha?",
        ans: "Sobre el eje horizontal se ubican únicamente impedancias resistivas puras (reactancia nula, x = 0). La resistencia normalizada r varía desde 0 (en el extremo izquierdo, cortocircuito) pasando por r = 1 (en el centro, adaptación) hasta r = ∞ (en el extremo derecho, circuito abierto).",
        teacherHint: "Cualquier punto sobre la línea recta ecuatorial no tiene bobina ni capacitor, es pura resistencia.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-f",
        q: "¿Qué representan los círculos de resistencia constante y por qué son útiles?",
        ans: "Son círculos cuyos centros están sobre el eje horizontal y todos son tangentes al punto de circuito abierto (1, 0). En cada uno de estos círculos, la parte real de la impedancia normalizada (r) se mantiene fija e idéntica mientras varía la reactancia. Son útiles porque permiten ubicar inmediatamente cualquier componente resistivo de una impedancia compleja.",
        teacherHint: "El círculo que pasa exactamente por el centro del mapa es el círculo r = 1.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-g",
        q: "¿Qué representan los arcos de reactancia constante?",
        ans: "Representan lugares geométricos donde la parte imaginaria normalizada (x) tiene un valor fijo constante. Son arcos de circunferencia que divergen desde el punto de circuito abierto hacia el borde exterior del diagrama.",
        teacherHint: "Si te mueves a lo largo de un arco, mantienes la reactancia y solo cambias la resistencia.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-h",
        q: "¿Qué significan la mitad superior y la mitad inferior del diagrama respecto de la reactancia?",
        ans: "• Mitad Superior: Representa Reactancia Positiva (+jx) => Cargas Inductivas (comportamiento como bobina/inductor).\n• Mitad Inferior: Representa Reactancia Negativa (-jx) => Cargas Capacitivas (comportamiento como condensador/capacitor).",
        teacherHint: "Regla fácil: Cielo = Inductor (+jx arriba), Tierra = Capacitor (-jx abajo).",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-i",
        q: "¿Qué relación existe entre la distancia al centro del mapa, |Γ| y el grado de adaptación?",
        ans: "La distancia geométrica desde el centro del mapa hasta el punto graficado es directamente proporcional a la magnitud del Coeficiente de Reflexión |Γ|. Cuanto más cerca del centro se encuentre el punto, menor es |Γ| y mejor es la adaptación. Si está en el borde exterior (|Γ| = 1), la desadaptación y reflexión son totales.",
        teacherHint: "El centro es el blanco del tiro al blanco: apuntamos siempre a estar lo más cerca posible del centro.",
        photo: "../IMG_20261124_093500.jpg"
      },
      {
        id: "05-j",
        q: "¿Cómo se relacionan los círculos de igual |Γ| con la VSWR en una línea ideal sin pérdidas?",
        ans: "En una línea ideal sin pérdidas, al desplazarse a lo largo de la línea la impedancia describe un círculo concéntrico centrado en el origen del diagrama. Todos los puntos de ese círculo tienen el mismo valor de |Γ| y, por lo tanto, exactamente el mismo valor de ROE / VSWR (círculo de VSWR constante).",
        teacherHint: "Un círculo alrededor del centro representa cómo gira la impedancia a lo largo del cable.",
        photo: "../IMG_20261124_093509.jpg"
      },
      {
        id: "05-k",
        q: "¿Cómo puede recuperarse la impedancia a partir de Γ y qué información muestra una traza de un VNA?",
        ans: "• Para recuperar la impedancia: z = (1 + Γ) / (1 - Γ), y luego se desnormaliza multiplicando por la impedancia característica: ZL = Z0 · z.\n• Un VNA (Analizador de Redes Vectoriales) mide directamente el vector complejo Γ en múltiples frecuencias y dibuja en pantalla una 'traza' continua sobre la Carta de Smith que muestra cómo evoluciona la impedancia de la antena a lo largo de toda su banda operativa.",
        teacherHint: "La traza del VNA parece un lazo o bucle: la frecuencia donde el bucle pasa más cerca del centro es la de mejor sintonía.",
        photo: "../IMG_20261124_093509.jpg"
      }
    ]
  },
  {
    id: "06",
    name: "06 · Teoría de la Información (Claude Shannon)",
    photo: "../IMG_20261124_093509.jpg",
    questions: [
      {
        id: "06-a",
        q: "Identificá los elementos del modelo básico de comunicación de Shannon y describí la función de cada uno.",
        ans: "El modelo de Claude Shannon (1948) consta de 5 bloques fundamentales:\n1) Fuente de información: Produce el mensaje original que se desea transmitir (texto, voz, imagen).\n2) Transmisor: Codifica y modula el mensaje transformándolo en una señal física apta para el canal.\n3) Canal: Medio físico que transporta la señal (cable, fibra, aire) y que introduce perturbaciones (ruido).\n4) Receptor: Capta la señal, filtra el ruido, demodula y decodifica el mensaje para reconstruir el original.\n5) Destino: Entidad o persona final a la que va dirigido el mensaje.",
        teacherHint: "Esquema esencial: Fuente -> Transmisor -> [Canal con Ruido] -> Receptor -> Destino.",
        photo: "../IMG_20261124_093509.jpg"
      },
      {
        id: "06-b",
        q: "¿De qué manera el ruido puede alterar un mensaje y qué papel cumple la redundancia para detectar o corregir errores?",
        ans: "• El ruido añade perturbaciones aleatorias a la señal que pueden distorsionar los símbolos transmitidos, convirtiendo un '0' en un '1' o corrompiendo palabras.\n• La Redundancia agrega información adicional estructurada (como bits de paridad, códigos CRC o repetición de tramas) que permite al receptor comprobar matemáticamente si el mensaje recibido sufrió alteraciones y, en muchos casos, corregir los bits erróneos sin necesidad de retransmitir.",
        teacherHint: "Redundancia es 'seguridad adicional': si digo 'hola', pero el canal pierde la 'o', el contexto me permite deducir qué decía.",
        photo: "../IMG_20261124_093509.jpg"
      },
      {
        id: "06-c",
        q: "¿Por qué emisor y receptor necesitan compartir un código o alfabeto de símbolos?",
        ans: "Porque sin reglas sintácticas y semánticas compartidas, recibir una señal física no garantiza poder interpretar su significado. Si dos personas o sistemas informáticos no utilizan el mismo código (ej. protocolo ASCII, lenguaje TCP/IP o un mismo idioma), la señal recibida será interpretada como ruido ininteligible.",
        teacherHint: "El código es el diccionario común que asigna significado a los pulsos eléctricos o luminosos.",
        photo: "../IMG_20261124_093509.jpg"
      },
      {
        id: "06-d",
        q: "Explicá la relación entre información, incertidumbre, sorpresa y probabilidad de un suceso.",
        ans: "En la teoría matemática de Shannon:\n• La Información es la reducción o eliminación de la incertidumbre en el receptor.\n• La cantidad de información generada por un suceso es directamente proporcional a la SORPRESA que causa y es INVERSAMENTE proporcional a su probabilidad:\n- Suceso muy probable (P cercano a 1): Causa poca sorpresa, por lo que aporta poca o nula información (ej. saber que mañana saldrá el sol).\n- Suceso poco probable (P cercano a 0): Causa enorme sorpresa, por lo que aporta una gran cantidad de información (ej. ganar la lotería nacional).",
        teacherHint: "Premisa clave de Shannon: Menor probabilidad => Mayor sorpresa => Más bits de información.",
        photo: "../IMG_20261124_093509.jpg"
      },
      {
        id: "06-e",
        q: "Distinguí dato, información, conocimiento y sabiduría usando el esquema de jerarquía visto (Pirámide DIKW).",
        ans: "• Dato: Símbolo o cifra bruta aislada sin contexto (ej. '140 km/h').\n• Información: El dato procesado y situado dentro de un contexto significativo que disminuye la incertidumbre (ej. 'Un vehículo circula a 140 km/h en una avenida urbana cuya máxima es 60 km/h').\n• Conocimiento: La información analizada y cruzada con leyes, experiencia o reglas (ej. 'Comprender que circular a esa velocidad constituye una infracción gravísima y un riesgo de colisión inminente').\n• Sabiduría: La capacidad de evaluar consecuencias y tomar decisiones éticas y prácticas acertadas (ej. 'Frenar y reducir la velocidad para preservar vidas y respetar la ley').",
        teacherHint: "Dato = Cifra suelta | Información = Cifra con contexto | Conocimiento = Saber qué significa | Sabiduría = Saber cómo actuar.",
        photo: "../IMG_20261124_093517.jpg"
      },
      {
        id: "06-f",
        q: "¿Qué es la redundancia y qué ventajas y costos puede tener en un mensaje?",
        ans: "Es la presencia de información repetida o predecible que excede lo estrictamente necesario para expresar un mensaje.\n• Ventajas: Otorga robustez frente al ruido del canal, permite detectar y corregir errores de transmisión y facilita la comprensión aunque se pierdan paquetes.\n• Costos: Consume mayor ancho de banda, alarga los tiempos de transmisión y requiere mayor memoria y capacidad de cómputo en transmisores y receptores.",
        teacherHint: "Balance de ingeniería: mucha redundancia satura la red; poca redundancia hace vulnerable la conexión.",
        photo: "../IMG_20261124_093517.jpg"
      },
      {
        id: "06-g",
        q: "Escribí la expresión de autoinformación I(x) y explicá por qué un evento menos probable aporta más bits.",
        ans: "Expresión matemática: I(x) = log₂(1 / P(x)) = -log₂ P(x), expresada en bits.\n• Explicación: Dado que la función logaritmo en base 2 es monótona creciente, al dividir 1 por una probabilidad muy pequeña (ej. 1/8), el argumento se vuelve grande: I = log₂(8) = 3 bits. Para un evento seguro o muy probable como 1/2, I = log₂(2) = 1 bit.\nPor ende, los sucesos raros aportan más bits de información porque resuelven mayor incertidumbre.",
        teacherHint: "Ejemplo clásico: Moneda justa P=1/2 => I = 1 bit. Dado de 8 caras P=1/8 => I = 3 bits.",
        photo: "../IMG_20261124_093517.jpg"
      },
      {
        id: "06-h",
        q: "¿Cómo se calcula la información conjunta de dos sucesos independientes?",
        ans: "Para dos sucesos independientes A y B, la probabilidad conjunta de que ocurran ambos es el producto de sus probabilidades: P(A ∩ B) = P(A) · P(B).\nPor las propiedades de los logaritmos, la información conjunta es la suma directa de sus autoinformaciones individuales:\nI(A, B) = I(A) + I(B).\nEjemplo: Si P(A)=1/2 (1 bit) y P(B)=1/4 (2 bits), P(A ∩ B) = 1/8 y I(A, B) = log₂(8) = 3 bits (1 + 2 = 3).",
        teacherHint: "Las probabilidades independientes se multiplican; las informaciones en bits se suman.",
        photo: "../IMG_20261124_093517.jpg"
      },
      {
        id: "06-i",
        q: "Diferenciá el bit como unidad de información del dígito binario (binit) como símbolo de un alfabeto.",
        ans: "• Binit (Binary Digit): Es el contenedor físico o símbolo material de un alfabeto binario (un 0 o un 1 almacenado en un flip-flop o transmitido como un pulso de voltaje).\n• Bit (Unidad de Información de Shannon): Es una magnitud matemática abstracta que cuantifica la incertidumbre eliminada. Un binit solo contiene 1 bit de información si ambos estados (0 y 1) son igualmente probables (P = 0.5). Si el emisor transmite casi siempre '0' con P = 0.99, cada binit físico contiene mucha menos información que 1 bit.",
        teacherHint: "Binit es la caja física (el casillero); bit es el contenido de sorpresa que lleva adentro.",
        photo: "../IMG_20261124_093517.jpg"
      },
      {
        id: "06-j",
        q: "¿Cuál es la diferencia entre una fuente con memoria y otra sin memoria?",
        ans: "• Fuente sin memoria: La emisión de cada símbolo es estadísticamente independiente de los símbolos generados previamente (ej. el lanzamiento sucesivo de una moneda no trucada o un generador de ruido blanco).\n• Fuente con memoria: La probabilidad de emisión de cada símbolo depende de los símbolos que salieron antes (ej. el lenguaje humano escrito, donde tras una letra 'q' la probabilidad de que siga una 'u' es casi del 100%).",
        teacherHint: "La compresión de datos moderna (como ZIP) aprovecha justamente la memoria de las fuentes para reducir tamaño.",
        photo: "../IMG_20261124_093517.jpg"
      }
    ]
  },
  {
    id: "07",
    name: "07 · Telefonía Celular y Redes Móviles",
    photo: "../IMG_20261124_093526.jpg",
    questions: [
      {
        id: "07-a",
        q: "Describí la función del teléfono, la estación base, la red del operador y el destino durante una comunicación móvil.",
        ans: "• Teléfono móvil (UE): Digitaliza la voz/datos del usuario, los codifica, los modula en radiofrecuencia y los transmite por aire hacia la celda más próxima (y viceversa al recibir).\n• Estación Base (BTS/eNodeB/gNodeB): Actúa como interfaz radioeléctrica bidireccional entre los terminales móviles y la red fija terrestre.\n• Red del Operador (Core Network): Autentica al abonado, asigna frecuencias y canales, gestiona la movilidad (handover), enruta los paquetes y factura el servicio.\n• Destino: El equipo o servidor final que decodifica y entrega la información al destinatario.",
        teacherHint: "Camino de la llamada: Móvil --(Aire RF)--> Estación Base --(Fibra)--> Núcleo del Operador --> Destino.",
        photo: "../IMG_20261124_093526.jpg"
      },
      {
        id: "07-b",
        q: "¿Cómo se relacionan frecuencia, longitud de onda, amplitud, fase y modulación en una señal de radio?",
        ans: "• Frecuencia (f) y Longitud de onda (λ): Inversamente proporcionales por la velocidad de la luz c = λ · f.\n• Amplitud (A) y Fase (φ): Definen el estado instantáneo de la onda portadora (la amplitud da la potencia y la fase indica en qué punto angular del ciclo se encuentra la oscilación).\n• Modulación: Es el proceso técnico mediante el cual se modifican sistemáticamente la amplitud, la frecuencia o la fase de la onda portadora de alta frecuencia para incrustar la información que se desea transportar.",
        teacherHint: "La portadora es el camión de carga; la modulación es la forma en que acomodas los paquetes en el camión.",
        photo: "../IMG_20261124_093526.jpg"
      },
      {
        id: "07-c",
        q: "Explicá la diferencia entre una señal analógica y una digital en la telefonía móvil.",
        ans: "• Señal Analógica (1G): Es continua en tiempo y amplitud. Cualquier interferencia o ruido en el aire altera directamente la forma de onda degradando la calidad de audio de forma irreversible. No admite cifrado robusto.\n• Señal Digital (2G a 5G): Codifica la voz y datos en secuencias discretas de bits (0 y 1). Permite regenerar la señal limpia frente al ruido, comprimir datos para ahorrar espectro y cifrar las comunicaciones para máxima seguridad.",
        teacherHint: "Digital = Inmunidad al ruido + Seguridad cifrada + Mayor capacidad de usuarios.",
        photo: "../IMG_20261124_093526.jpg"
      },
      {
        id: "07-d",
        q: "¿Qué cambios principales presenta la evolución de las redes celulares de 1G a 5G?",
        ans: "• 1G: Analógica, exclusivamente voz, sin cifrado, baja capacidad y muy vulnerable a interferencias.\n• 2G (GSM): Digitalización de la voz, introducción de mensajes SMS, cifrado y primeros datos (GPRS/EDGE).\n• 3G (UMTS): Banda ancha móvil, navegación web real, correo y streaming de video inicial.\n• 4G (LTE): Arquitectura unificada Todo-IP, conmutación de paquetes a alta velocidad y baja latencia.\n• 5G (New Radio): Velocidades multi-gigabit por segundo, latencia ultrabaja (< 1 ms), antenas Massive MIMO y soporte masivo para Internet de las Cosas (IoT).",
        teacherHint: "1G Voz analógica -> 2G SMS digital -> 3G Web móvil -> 4G Todo IP -> 5G IoT masivo y latencia cero.",
        photo: "../IMG_20261124_093532.jpg"
      },
      {
        id: "07-e",
        q: "¿Por qué es necesario administrar el espectro radioeléctrico y organizarlo en canales?",
        ans: "Porque el espectro electromagnético es un RECURSO NATURAL FINITO Y COMPARTIDO. Si múltiples transmisores emitieran simultáneamente en la misma frecuencia y área geográfica, sus ondas colisionarían generando interferencia destructiva y bloqueando la comunicación. Organizarlo en canales regulados permite separar comunicaciones simultáneas y reutilizar las mismas frecuencias en celdas geográficamente distantes.",
        teacherHint: "El espectro es como una autopista con carriles: sin carriles ni turnos, todos chocarían entre sí.",
        photo: "../IMG_20261124_093532.jpg"
      },
      {
        id: "07-f",
        q: "¿Por qué los hexágonos utilizados para representar celdas no describen fronteras reales exactas de cobertura?",
        ans: "Porque el hexágono es un MODELO TEÓRICO GEOMÉTRICO idealizado para planificar el territorio sin dejar huecos ni superposiciones. En la realidad física, las ondas sufren atenuación irregular por edificios, cerros, follaje y clima, por lo que las celdas reales tienen bordes difusos y amorfos con áreas de solapamiento donde el teléfono recibe señal de múltiples antenas.",
        teacherHint: "En los papeles se dibujan hexágonos perfectos; en la calle la cobertura parece una mancha irregular de tinta.",
        photo: "../IMG_20261124_093532.jpg"
      },
      {
        id: "07-g",
        q: "Diferenciá los conceptos de sitio, estación base, antena, sector y celda.",
        ans: "• Sitio: El emplazamiento físico o inmueble donde se ubica la infraestructura (torre, mástil, terraza).\n• Estación Base: El gabinete con los equipos electrónicos de radio y procesamiento en banda base.\n• Antena: El dispositivo físico radiante montado en la torre que convierte señales eléctricas en ondas de radio.\n• Sector: La subdivisión angular del espacio (típicamente 3 sectores de 120° cubiertos por antenas direccionales).\n• Celda: La unidad lógica y geográfica de cobertura radioeléctrica identificada con un identificador unívoco de red (Cell ID).",
        teacherHint: "Sitio = La torre de metal | Estación base = La computadora de radio | Antena = El panel | Sector = El ángulo de 120° | Celda = La cobertura lógica.",
        photo: "../IMG_20261124_093532.jpg"
      },
      {
        id: "07-h",
        q: "¿Qué expresa una potencia medida en dBm y cómo deben compararse distintos valores de señal recibida?",
        ans: "El dBm es una unidad logarítmica de potencia absoluta referida a 1 milivatio (0 dBm = 1 mW):\nP(dBm) = 10 · log₁₀(P / 1 mW).\nEn telefonía celular, las potencias recibidas son de microvatios o picovatios, por lo que siempre se expresan en números negativos.\n• Comparación: Al ser números negativos, cuanto MENOS NEGATIVO sea el valor, MAYOR es la potencia recibida.\nEjemplo: -60 dBm (Excelente señal) > -80 dBm (Señal buena) > -105 dBm (Señal crítica/débil al borde de corte).",
        teacherHint: "¡Cuidado en el examen!: -70 dBm es una señal MUCHO MÁS POTENTE que -95 dBm.",
        photo: "../IMG_20261124_093556.jpg"
      },
      {
        id: "07-i",
        q: "Explicá cómo los obstáculos, la multitrayectoria y el desvanecimiento (fading) modifican la señal recibida.",
        ans: "• Obstáculos (edificios, cerros): Provocan absorción, sombra y difracción, debilitando la potencia de la onda.\n• Multitrayectoria (Multipath): La onda emitida choca con múltiples superficies y se bifurca en varios rayos que recorren caminos de diferente longitud hasta la antena del teléfono.\n• Desvanecimiento (Fading): Al llegar desfasadas en el tiempo, las múltiples ondas interfieren constructiva o destructivamente entre sí, generando fluctuaciones rápidas e impredecibles en el nivel de señal recibida.",
        teacherHint: "Cuando caminas dos pasos y de repente pasas de 4 barras a 1 barra de señal, estás sufriendo desvanecimiento por multitrayectoria.",
        photo: "../IMG_20261124_093556.jpg"
      },
      {
        id: "07-j",
        q: "¿Qué diferencias existen entre ruido e interferencia y cómo pueden afectar la conectividad?",
        ans: "• Ruido: Es una perturbación aleatoria originada por fuentes naturales o físicas (ruido térmico de los componentes, radiación cósmica o atmosférica).\n• Interferencia: Es una perturbación artificial generada por otros transmisores humanos en frecuencias cercanas (celdas vecinas, armónicos, inhibidores).\n• Efectos: Ambos degradan la relación señal-a-ruido (SNR/SINR), reduciendo drásticamente la tasa de bits, provocando errores en paquetes y causando cortes de llamada.",
        teacherHint: "Ruido = El murmullo natural del ambiente | Interferencia = Otra persona hablando fuerte al lado tuyo.",
        photo: "../IMG_20261124_093556.jpg"
      },
      {
        id: "07-k",
        q: "¿Qué es el handover (traspaso), cuáles son sus etapas y por qué no implica necesariamente que el teléfono se haya desplazado?",
        ans: "• Definición: Es el mecanismo continuo mediante el cual la red celular transfiere una llamada o sesión de datos activa de una celda a otra sin que el usuario sufra interrupción en el servicio.\n• Sus 3 etapas son:\n  1) Medición: El teléfono monitorea continuamente la potencia y calidad de su celda y de las celdas vecinas y envía reportes a la red.\n  2) Decisión: La red evalúa si otra celda ofrece mejores condiciones de señal según umbrales predefinidos.\n  3) Ejecución: La red reserva canales en la celda destino, conmuta el enlace y libera los recursos de la celda de origen.\n• Por qué ocurre sin desplazamiento: Puede ocurrir con el usuario totalmente quieto debido a una caída abrupta de señal por fading (un camión que bloquea la antena) o por balanceo de carga (la celda actual se satura de tráfico y la red deriva terminales a una celda vecina con menor uso).",
        teacherHint: "Pregunta clásica de examen: '¿El handover solo ocurre si te estás moviendo?' ¡NO! Puede ocurrir por balanceo de carga o desvanecimiento estando quieto.",
        photo: "../IMG_20261124_093556.jpg"
      },
      {
        id: "07-l",
        q: "¿Qué información aparece en un registro de tráfico celular (CDR) y cómo se distinguen línea, IMEI e IMSI?",
        ans: "Un registro CDR (Call Detail Record) documenta eventos técnicos de red: fecha, hora de inicio, duración, tipo de servicio (voz, SMS, datos), celda inicial y final (Cell ID) e identificadores del usuario:\n• Línea (MSISDN): Es el número telefónico público asignado al abonado (el que marcas para llamar, ej. +54 9 11...).\n• IMSI (International Mobile Subscriber Identity): Es el código único secreto grabado dentro de la tarjeta SIM que identifica la suscripción del usuario ante el núcleo de la red celular.\n• IMEI (International Mobile Equipment Identity): Es el número de serie único de fábrica de 15 dígitos que identifica al aparato físico celular (hardware).",
        teacherHint: "Diferencia de oro: MSISDN = Tu número de teléfono | IMSI = El chip SIM | IMEI = El aparato celular físico.",
        photo: "../IMG_20261124_093600.jpg"
      },
      {
        id: "07-m",
        q: "¿Por qué deben revisarse fecha, hora, duración, celda e identificadores antes de interpretar una secuencia de eventos?",
        ans: "1) Para evitar errores cronológicos o de correlación en auditorías de red o peritajes forenses.\n2) Para validar la consistencia física de los eventos (ej. descartar clonaciones si un mismo IMSI aparece en dos celdas distantes en milisegundos).\n3) Para distinguir entre eventos de usuario reales y señalizaciones automáticas de mantenimiento de la red.",
        teacherHint: "En redes y seguridad informática, un análisis sin correlación temporal exacta carece de validez técnica.",
        photo: "../IMG_20261124_093600.jpg"
      }
    ]
  }
];

// =============================================================================
// BANCO DE PREGUNTAS DEL SIMULADOR DE EXAMEN (QUIZ)
// =============================================================================
const QUIZ_QUESTIONS = [
  {
    category: "01 · Electricidad",
    prompt: "Si la resistencia de un circuito se duplica y la tensión aplicada permanece constante, ¿qué ocurre con la corriente?",
    options: [
      "Se duplica debido a la Ley de Ohm.",
      "Se reduce a la mitad porque la corriente es inversamente proporcional a la resistencia.",
      "Permanece constante porque la tensión no cambió.",
      "Se cuadruplica por disipación de potencia."
    ],
    correct: 1,
    explanation: "Por la Ley de Ohm, I = V / R. Si R pasa a ser 2R, la nueva corriente es I' = V / (2R) = I / 2. Disminuye exactamente a la mitad."
  },
  {
    category: "02 · Física de Ondas",
    prompt: "¿De qué dependen exclusivamente la velocidad de propagación de un pulso mecánico en una cuerda?",
    options: [
      "De la fuerza con la que el experimentador sacuda la cuerda.",
      "De la frecuencia de la oscilación y su amplitud máxima.",
      "De las propiedades físicas del medio: la tensión aplicada y la densidad lineal de masa (v = √(Ft / μ)).",
      "Del tiempo transcurrido desde que se inició la perturbación."
    ],
    correct: 2,
    explanation: "La velocidad de una onda mecánica está fijada únicamente por el medio por donde viaja: v = √(Ft / μ). Mover la mano con más fuerza solo cambia la amplitud, no la velocidad."
  },
  {
    category: "04 · ROE y Reflexión",
    prompt: "¿Qué valor de Relación de Onda Estacionaria (ROE / VSWR) indica una adaptación perfecta sin ninguna reflexión de potencia?",
    options: [
      "0 : 1",
      "1 : 1",
      "50 : 1",
      "Infinito"
    ],
    correct: 1,
    explanation: "El valor ideal de ROE es 1:1, lo que significa que el voltaje máximo es igual al mínimo en la línea (Vmax = Vmin), indicando que el coeficiente de reflexión |Γ| es 0."
  },
  {
    category: "04 · ROE y Reflexión",
    prompt: "¿Cómo se interpreta una medición de Pérdida de Retorno (Return Loss) con un valor elevado de 30 dB?",
    options: [
      "Indica una pésima adaptación porque la pérdida de señal es enorme.",
      "Indica una adaptación excelente, ya que la onda reflejada está atenuada 30 dB respecto a la incidente.",
      "Indica un cortocircuito en la línea de transmisión.",
      "Significa que el 50% de la potencia regresa al transmisor."
    ],
    correct: 1,
    explanation: "A diferencia del ROE (donde buscamos el valor más bajo posible), en Return Loss un valor ALTO en decibeles significa que la reflexión es prácticamente nula y la adaptación es excelente."
  },
  {
    category: "05 · Diagrama de Smith",
    prompt: "En el Diagrama de Smith, ¿qué representa el punto central del círculo (0, 0)?",
    options: [
      "Un cortocircuito con ZL = 0 Ω.",
      "Un circuito abierto con ZL = ∞.",
      "La adaptación perfecta donde ZL = Z0 (z normalizada = 1 + j0 y ROE = 1:1).",
      "Una carga puramente reactiva inductiva."
    ],
    correct: 2,
    explanation: "El centro de la Carta de Smith es la impedancia normalizada z = 1 + j0 (ZL = Z0), donde el coeficiente de reflexión es nulo (|Γ| = 0)."
  },
  {
    category: "05 · Diagrama de Smith",
    prompt: "Si una impedancia normalizada se ubica en la mitad superior de la Carta de Smith, ¿qué tipo de comportamiento tiene?",
    options: [
      "Capacitivo puro (-jx).",
      "Inductivo (+jx), comportándose de forma semejante a una bobina.",
      "Resistivo puro sin parte reactiva.",
      "Inestable y fuera de norma."
    ],
    correct: 1,
    explanation: "La mitad superior del Diagrama de Smith corresponde a reactancias positivas (+jx), es decir, comportamiento inductivo."
  },
  {
    category: "06 · Teoría de la Información",
    prompt: "Según Claude Shannon, si un evento meteorológico tiene una probabilidad P = 1 (evento 100% seguro), ¿cuánta información aporta su confirmación?",
    options: [
      "1 bit.",
      "0 bits de información, porque no elimina ninguna incertidumbre.",
      "Infinitos bits.",
      "Depende del ancho de banda del canal."
    ],
    correct: 1,
    explanation: "I(x) = -log₂(P) = -log₂(1) = 0 bits. Un suceso seguro no causa sorpresa ni elimina incertidumbre, por lo que aporta cero información."
  },
  {
    category: "06 · Teoría de la Información",
    prompt: "En la jerarquía DIKW, ¿cuál es la diferencia entre Dato e Información?",
    options: [
      "El dato es subjetivo y la información es matemática.",
      "El dato es una cifra aislada sin contexto; la información es el dato ubicado en un contexto que reduce la incertidumbre.",
      "Son exactamente sinónimos en telecomunicaciones.",
      "El dato requiere sabiduría para poder transmitirse."
    ],
    correct: 1,
    explanation: "Un dato como '140 km/h' no dice nada por sí solo. Al agregarle contexto ('vehículo en avenida con límite de 60 km/h') se convierte en información procesable."
  },
  {
    category: "07 · Telefonía Celular",
    prompt: "Al comparar potencias recibidas en telefonía móvil medidas en dBm, ¿cuál de las siguientes representa la mejor señal?",
    options: [
      "-110 dBm",
      "-95 dBm",
      "-65 dBm",
      "-1 dBm"
    ],
    correct: 2,
    explanation: "Al ser números negativos, -65 dBm es mayor que -95 dBm o -110 dBm (está más cerca de 0 dBm = 1 mW). Indica un nivel de potencia recibida mucho más fuerte. (-1 dBm no es un nivel típico de recepción de móvil, -65 dBm es excelente señal)."
  },
  {
    category: "07 · Telefonía Celular",
    prompt: "¿Por qué puede producirse un Handover (traspaso) de celda si el usuario no se ha movido de su asiento?",
    options: [
      "Es imposible; el handover solo se activa por el sensor GPS del teléfono.",
      "Por fluctuaciones de señal debidas a desvanecimiento (fading) o por balanceo de carga de tráfico en celdas congestionadas.",
      "Porque se agotó la batería del teléfono.",
      "Por interferencia debida al protocolo SMS."
    ],
    correct: 1,
    explanation: "El handover puede dispararse sin movimiento si un obstáculo genera un desvanecimiento brusco o si la red traslada conexiones para no saturar una celda vecina."
  },
  {
    category: "07 · Telefonía Celular",
    prompt: "¿Cómo se distingue un IMEI de un IMSI en las redes móviles?",
    options: [
      "El IMEI identifica al usuario y el IMSI al teléfono.",
      "El IMEI identifica el hardware del aparato celular de fábrica; el IMSI identifica la suscripción del usuario grabada en la SIM.",
      "Ambos identifican la antena de la estación base.",
      "El IMEI es público y el IMSI es el número que figura en la guía telefónica."
    ],
    correct: 1,
    explanation: "IMEI = Identificador físico del equipo (hardware celular). IMSI = Identificador único del abonado en la tarjeta SIM."
  }
];

// =============================================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStudyNav();
  renderGuideQuestions();
  initGuideSearchAndFilters();
  initFlashcardsEngine();
  initQuizSimulator();
  initSmithCalculator();
  initPhotoModal();
});

// =============================================================================
// 1. TEMA CLARO / OSCURO CON LOCALSTORAGE
// =============================================================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("comms-theme") || "light";
  
  if (savedTheme === "dark") {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("theme-dark")) {
        document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-light");
        localStorage.setItem("comms-theme", "light");
      } else {
        document.body.classList.remove("theme-light");
        document.body.classList.add("theme-dark");
        localStorage.setItem("comms-theme", "dark");
      }
    });
  }
}

// =============================================================================
// 2. NAVEGACIÓN ENTRE MODOS DE ESTUDIO (TABS)
// =============================================================================
function initStudyNav() {
  const navPills = document.querySelectorAll(".nav-pill");
  const panes = document.querySelectorAll(".study-pane");

  navPills.forEach(pill => {
    pill.addEventListener("click", () => {
      navPills.forEach(p => p.classList.remove("active"));
      panes.forEach(pane => pane.classList.remove("active"));

      pill.classList.add("active");
      const targetId = `pane-${pill.dataset.tab}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
        window.scrollTo({ top: 180, behavior: 'smooth' });
      }
    });
  });
}

// =============================================================================
// 3. RENDERIZADO DE LA GUÍA DE ESTUDIO (ACORDEÓN)
// =============================================================================
function renderGuideQuestions(filterMod = "all", searchTerm = "") {
  const container = document.getElementById("questionsContainer");
  if (!container) return;
  container.innerHTML = "";

  let totalRendered = 0;

  STUDY_MODULES.forEach(mod => {
    if (filterMod !== "all" && mod.id !== filterMod) return;

    // Filtrar preguntas por texto de búsqueda
    const matchingQuestions = mod.questions.filter(item => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return item.q.toLowerCase().includes(term) ||
             item.ans.toLowerCase().includes(term) ||
             (item.teacherHint && item.teacherHint.toLowerCase().includes(term));
    });

    if (matchingQuestions.length === 0) return;

    totalRendered += matchingQuestions.length;

    const modBlock = document.createElement("div");
    modBlock.className = "q-module-block";
    modBlock.innerHTML = `
      <h3 class="q-module-title">
        <span>📘</span> ${escapeHtml(mod.name)}
      </h3>
    `;

    matchingQuestions.forEach((item, idx) => {
      const card = document.createElement("div");
      card.className = "q-card";
      card.id = `q-${item.id}`;

      // Formatear saltos de línea en la respuesta
      const formattedAns = escapeHtml(item.ans).replace(/\n/g, "<br>");

      card.innerHTML = `
        <div class="q-card-header">
          <div class="q-header-left">
            <span class="q-tag">${item.id.toUpperCase()}</span>
            <span class="q-title">${escapeHtml(item.q)}</span>
          </div>
          <span class="q-toggle-icon">▼</span>
        </div>
        <div class="q-card-body">
          <div class="answer-box">
            <p class="answer-lead">${formattedAns}</p>
          </div>
          ${item.teacherHint ? `
            <div class="teacher-callout">
              <span class="teacher-callout-icon">👨‍🏫</span>
              <div class="teacher-callout-content">
                <strong>Explicación del Maestro:</strong> ${escapeHtml(item.teacherHint)}
              </div>
            </div>
          ` : ""}
          <div class="q-footer-actions">
            <button class="btn-photo-link" onclick="openPhotoModal('${item.photo}', '${escapeHtml(item.q)}')">
              📷 Ver apunte manuscrito original
            </button>
          </div>
        </div>
      `;

      // Toggle click
      const header = card.querySelector(".q-card-header");
      header.addEventListener("click", () => {
        card.classList.toggle("open");
      });

      modBlock.appendChild(card);
    });

    container.appendChild(modBlock);
  });

  if (totalRendered === 0) {
    container.innerHTML = `
      <div class="card-clean" style="text-align:center; padding: 3rem;">
        <p style="color: var(--text-muted); font-size: 1.1rem;">No se encontraron preguntas que coincidan con "${escapeHtml(searchTerm)}".</p>
      </div>
    `;
  }
}

function initGuideSearchAndFilters() {
  const searchInput = document.getElementById("guideSearchInput");
  const modBtns = document.querySelectorAll(".mod-btn");

  let currentMod = "all";
  let currentSearch = "";

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderGuideQuestions(currentMod, currentSearch);
    });
  }

  modBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMod = btn.dataset.mod;
      renderGuideQuestions(currentMod, currentSearch);
    });
  });
}

// =============================================================================
// 4. MOTOR DE FLASHCARDS INTERACTIVAS
// =============================================================================
let flashcardDeck = [];
let currentCardIndex = 0;
let masteredCards = new Set(JSON.parse(localStorage.getItem("mastered-cards") || "[]"));

function initFlashcardsEngine() {
  const categorySelect = document.getElementById("fcCategorySelect");
  const cardBox = document.getElementById("flashcardBox");
  const btnFlip = document.getElementById("fcFlipBtn");
  const btnNext = document.getElementById("fcNextBtn");
  const btnPrev = document.getElementById("fcPrevBtn");
  const btnMastered = document.getElementById("fcMasteredBtn");
  const btnReview = document.getElementById("fcReviewBtn");

  updateMasteredCounter();
  buildFlashcardDeck("all");

  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      buildFlashcardDeck(e.target.value);
    });
  }

  function flipCard() {
    cardBox.classList.toggle("flipped");
  }

  if (cardBox) cardBox.addEventListener("click", flipCard);
  if (btnFlip) btnFlip.addEventListener("click", flipCard);

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      navigateCard(1);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      navigateCard(-1);
    });
  }

  if (btnMastered) {
    btnMastered.addEventListener("click", () => {
      const card = flashcardDeck[currentCardIndex];
      if (card) {
        masteredCards.add(card.id);
        localStorage.setItem("mastered-cards", JSON.stringify([...masteredCards]));
        updateMasteredCounter();
        navigateCard(1);
      }
    });
  }

  if (btnReview) {
    btnReview.addEventListener("click", () => {
      const card = flashcardDeck[currentCardIndex];
      if (card) {
        masteredCards.delete(card.id);
        localStorage.setItem("mastered-cards", JSON.stringify([...masteredCards]));
        updateMasteredCounter();
        navigateCard(1);
      }
    });
  }

  // Teclas rápidas: Espacio para girar, Flechas para navegar
  document.addEventListener("keydown", (e) => {
    const paneFlashcards = document.getElementById("pane-flashcards");
    if (!paneFlashcards || !paneFlashcards.classList.contains("active")) return;

    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (e.code === "ArrowRight") {
      navigateCard(1);
    } else if (e.code === "ArrowLeft") {
      navigateCard(-1);
    }
  });
}

function buildFlashcardDeck(category) {
  flashcardDeck = [];
  STUDY_MODULES.forEach(mod => {
    if (category === "all" || mod.id === category) {
      mod.questions.forEach(q => {
        flashcardDeck.push({
          ...q,
          modName: mod.name
        });
      });
    }
  });

  currentCardIndex = 0;
  displayCurrentCard();
}

function displayCurrentCard() {
  const cardBox = document.getElementById("flashcardBox");
  if (!cardBox || flashcardDeck.length === 0) return;

  cardBox.classList.remove("flipped");

  const card = flashcardDeck[currentCardIndex];
  const fcCounter = document.getElementById("fcCounter");
  const fcCatBadge = document.getElementById("fcCategoryBadge");
  const fcProgressFill = document.getElementById("fcProgressFill");
  const fcFrontNum = document.getElementById("fcFrontNum");
  const fcFrontText = document.getElementById("fcFrontText");
  const fcBackAnswer = document.getElementById("fcBackAnswer");
  const fcBackHint = document.getElementById("fcBackHint");

  if (fcCounter) fcCounter.textContent = `Tarjeta ${currentCardIndex + 1} de ${flashcardDeck.length}`;
  if (fcCatBadge) fcCatBadge.textContent = card.modName.split("·")[1]?.trim() || "Tema";
  if (fcProgressFill) {
    const pct = ((currentCardIndex + 1) / flashcardDeck.length) * 100;
    fcProgressFill.style.width = `${pct}%`;
  }

  const isMastered = masteredCards.has(card.id);
  if (fcFrontNum) {
    fcFrontNum.innerHTML = `${card.id.toUpperCase()} ${isMastered ? '<span style="color:#10b981;">(✓ Dominada)</span>' : ''}`;
  }
  if (fcFrontText) fcFrontText.textContent = card.q;
  if (fcBackAnswer) fcBackAnswer.innerHTML = escapeHtml(card.ans).replace(/\n/g, "<br>");
  if (fcBackHint) {
    fcBackHint.innerHTML = `<strong>Consejo del Maestro:</strong> ${escapeHtml(card.teacherHint || "Comprende la física y las variables de la ecuación.")}`;
  }
}

function navigateCard(direction) {
  if (flashcardDeck.length === 0) return;
  currentCardIndex += direction;
  if (currentCardIndex >= flashcardDeck.length) currentCardIndex = 0;
  if (currentCardIndex < 0) currentCardIndex = flashcardDeck.length - 1;
  displayCurrentCard();
}

function updateMasteredCounter() {
  const countEl = document.getElementById("masteredCount");
  if (countEl) countEl.textContent = masteredCards.size;
}

// =============================================================================
// 5. MOTOR DEL SIMULADOR DE EXAMEN PARCIAL (QUIZ)
// =============================================================================
let currentQuizQuestions = [];
let quizCurrentIndex = 0;
let quizScore = 0;

function initQuizSimulator() {
  const btnStartHero = document.getElementById("btnStartQuizHero");
  const btnStartTop = document.getElementById("btnStartQuiz");
  const btnRestart = document.getElementById("btnRestartQuiz");
  const btnNext = document.getElementById("quizNextBtn");

  if (btnStartHero) btnStartHero.addEventListener("click", startNewQuiz);
  if (btnStartTop) btnStartTop.addEventListener("click", startNewQuiz);
  if (btnRestart) btnRestart.addEventListener("click", startNewQuiz);
  if (btnNext) btnNext.addEventListener("click", advanceQuiz);
}

function startNewQuiz() {
  // Mezclar preguntas y elegir 10
  const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
  currentQuizQuestions = shuffled.slice(0, 10);
  quizCurrentIndex = 0;
  quizScore = 0;

  document.getElementById("quizStartView").style.display = "none";
  document.getElementById("quizResultsView").style.display = "none";
  document.getElementById("quizPlayView").style.display = "block";

  renderQuizStep();
}

function renderQuizStep() {
  if (quizCurrentIndex >= currentQuizQuestions.length) {
    finishQuiz();
    return;
  }

  const q = currentQuizQuestions[quizCurrentIndex];
  document.getElementById("quizQuestionIndex").textContent = `Pregunta ${quizCurrentIndex + 1} de ${currentQuizQuestions.length}`;
  document.getElementById("quizScoreCurrent").textContent = `Aciertos: ${quizScore}`;
  
  const pct = ((quizCurrentIndex) / currentQuizQuestions.length) * 100;
  document.getElementById("quizProgressFill").style.width = `${pct}%`;

  document.getElementById("quizCategoryBadge").textContent = q.category;
  document.getElementById("quizQuestionPrompt").textContent = q.prompt;

  const optionsContainer = document.getElementById("quizOptionsList");
  optionsContainer.innerHTML = "";

  const feedbackBox = document.getElementById("quizFeedbackBox");
  feedbackBox.style.display = "none";

  const letters = ["A", "B", "C", "D"];

  q.options.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerHTML = `
      <span class="quiz-opt-letter">${letters[i]}</span>
      <span>${escapeHtml(optText)}</span>
    `;

    btn.addEventListener("click", () => {
      handleQuizAnswer(i, btn);
    });

    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, clickedBtn) {
  const q = currentQuizQuestions[quizCurrentIndex];
  const allBtns = document.querySelectorAll(".quiz-option-btn");
  allBtns.forEach(b => b.disabled = true);

  const feedbackBox = document.getElementById("quizFeedbackBox");
  const feedbackTitle = document.getElementById("quizFeedbackTitle");
  const feedbackText = document.getElementById("quizFeedbackExplanation");

  if (selectedIndex === q.correct) {
    quizScore++;
    clickedBtn.classList.add("correct");
    feedbackTitle.textContent = "🎉 ¡Excelente! Respuesta Correcta";
    feedbackTitle.style.color = "var(--success)";
  } else {
    clickedBtn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    feedbackTitle.textContent = "❌ Respuesta Incorrecta";
    feedbackTitle.style.color = "var(--danger)";
  }

  feedbackText.innerHTML = escapeHtml(q.explanation);
  feedbackBox.style.display = "block";
  document.getElementById("quizScoreCurrent").textContent = `Aciertos: ${quizScore}`;
}

function advanceQuiz() {
  quizCurrentIndex++;
  renderQuizStep();
}

function finishQuiz() {
  document.getElementById("quizPlayView").style.display = "none";
  const resultsView = document.getElementById("quizResultsView");
  resultsView.style.display = "block";

  const gradeText = document.getElementById("quizGradeText");
  const resultTitle = document.getElementById("quizResultTitle");
  const resultFeedback = document.getElementById("quizResultFeedback");
  const resultEmoji = document.getElementById("quizResultEmoji");

  gradeText.textContent = quizScore;

  if (quizScore >= 9) {
    resultEmoji.textContent = "🥇";
    resultTitle.textContent = "¡Sobresaliente! Estás listo para el Parcial";
    resultFeedback.textContent = "Has demostrado un dominio impecable tanto de las fórmulas como de los fundamentos físicos y conceptuales de la materia. ¡Vas a tener un examen excelente!";
  } else if (quizScore >= 7) {
    resultEmoji.textContent = "👍";
    resultTitle.textContent = "¡Muy Buen Trabajo! Examen Aprobado";
    resultFeedback.textContent = "Tienes una base sólida. Te recomiendo revisar las flashcards de aquellos módulos donde dudaste para asegurar un 10 rotundo en la mesa de examen.";
  } else if (quizScore >= 5) {
    resultEmoji.textContent = "📚";
    resultTitle.textContent = "Aprobado Justo • Necesitas Repaso";
    resultFeedback.textContent = "Comprendes los conceptos elementales, pero hubo vacíos en adaptaciones de RF, Smith o Telefonía Celular. Repasa la guía con los consejos pedagógicos.";
  } else {
    resultEmoji.textContent = "💪";
    resultTitle.textContent = "¡Ánimo! A estudiar con método";
    resultFeedback.textContent = "No te desanimes. Este simulador está diseñado para detectar errores antes del parcial real. Lee cada pregunta en la Guía de Estudio y luego vuelve a intentar.";
  }
}

// =============================================================================
// 6. CALCULADORA DE RF & DIAGRAMA DE SMITH INTERACTIVO
// =============================================================================
function initSmithCalculator() {
  const btnCalc = document.getElementById("btnCalculateSmith");
  const inputZ0 = document.getElementById("inputZ0");
  const inputR = document.getElementById("inputR");
  const inputX = document.getElementById("inputX");

  function calculateAndPlot() {
    const Z0 = parseFloat(inputZ0.value) || 50;
    const R = parseFloat(inputR.value) || 50;
    const X = parseFloat(inputX.value) || 0;

    // 1. Impedancia normalizada z = r + jx
    const r = R / Z0;
    const x = X / Z0;

    // 2. Coeficiente de reflexión Γ = (z - 1)/(z + 1)
    // z - 1 = (r - 1) + jx
    // z + 1 = (r + 1) + jx
    const num_re = r - 1;
    const num_im = x;
    const den_re = r + 1;
    const den_im = x;

    const denom = den_re * den_re + den_im * den_im;
    const gamma_re = (num_re * den_re + num_im * den_im) / denom;
    const gamma_im = (num_im * den_re - num_re * den_im) / denom;

    const gamma_mag = Math.sqrt(gamma_re * gamma_re + gamma_im * gamma_im);

    // 3. ROE / VSWR = (1 + |Γ|) / (1 - |Γ|)
    let roe = 1;
    if (gamma_mag >= 0.9999) {
      roe = 99.9; // Casi infinito
    } else {
      roe = (1 + gamma_mag) / (1 - gamma_mag);
    }

    // 4. Return Loss (RL) = -20 * log10(|Γ|)
    let rl = 0;
    if (gamma_mag <= 0.0001) {
      rl = 50; // Prácticamente infinita atenuación
    } else {
      rl = -20 * Math.log10(gamma_mag);
    }

    // 5. Potencia reflejada = |Γ|² * 100%
    const p_ref = gamma_mag * gamma_mag * 100;

    // Actualizar panel de texto
    const xSign = x >= 0 ? "+" : "-";
    document.getElementById("outZnorm").textContent = `${r.toFixed(2)} ${xSign} j${Math.abs(x).toFixed(2)}`;
    
    let typeDesc = "Resistiva Pura (x = 0)";
    if (x > 0.001) typeDesc = "Inductiva (+jx) • Mitad Superior";
    else if (x < -0.001) typeDesc = "Capacitiva (-jx) • Mitad Inferior";
    document.getElementById("outType").textContent = typeDesc;

    document.getElementById("outGamma").textContent = gamma_mag.toFixed(3);
    document.getElementById("outROE").textContent = `${roe.toFixed(2)} : 1`;
    document.getElementById("outRL").textContent = `${rl.toFixed(1)} dB`;
    document.getElementById("outPref").textContent = `${p_ref.toFixed(1)} %`;

    const outDiag = document.getElementById("outDiag");
    if (roe < 1.25) {
      outDiag.textContent = "Excelente (ROE < 1.25:1) ✓";
      outDiag.className = "calc-val text-success";
    } else if (roe < 1.8) {
      outDiag.textContent = "Aceptable para Operación (ROE < 1.8:1)";
      outDiag.className = "calc-val text-success";
    } else if (roe < 2.5) {
      outDiag.textContent = "Advertencia: Requiere Sintonía (ROE > 2:1)";
      outDiag.className = "calc-val text-warning";
    } else {
      outDiag.textContent = "Peligro: Desadaptación Crítica";
      outDiag.className = "calc-val text-danger";
    }

    // Actualizar SVG de Smith
    // Las coordenadas en SVG de Smith corresponden directamente a la parte real e imaginaria de Γ
    // Nótese que en SVG el eje Y positivo va hacia abajo, mientras que en Smith +jx va hacia arriba
    // Por ende: SVG_X = gamma_re, SVG_Y = -gamma_im
    const ptGroup = document.getElementById("smithPointGroup");
    const vswrCircle = document.getElementById("smithVswrCircle");
    const statusText = document.getElementById("smithPlotStatus");

    if (ptGroup) {
      ptGroup.setAttribute("transform", `translate(${gamma_re.toFixed(4)}, ${(-gamma_im).toFixed(4)})`);
    }

    if (vswrCircle) {
      vswrCircle.setAttribute("r", gamma_mag.toFixed(4));
    }

    if (statusText) {
      statusText.textContent = `Punto: z = ${r.toFixed(2)} ${xSign} j${Math.abs(x).toFixed(2)}`;
    }
  }

  if (btnCalc) btnCalc.addEventListener("click", calculateAndPlot);
  // Ejecutar inicial con valores del apunte (50 + j25)
  calculateAndPlot();
}

// =============================================================================
// 7. MODAL DE FOTO DEL APUNTE ORIGINAL
// =============================================================================
function initPhotoModal() {
  const modal = document.getElementById("photoModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}

window.openPhotoModal = function(photoPath, title) {
  const modal = document.getElementById("photoModal");
  const img = document.getElementById("modalPhotoImg");
  const titleEl = document.getElementById("modalPhotoTitle");

  if (!modal || !img) return;

  img.src = photoPath;
  if (titleEl) titleEl.textContent = title || "Apunte original del profesor";
  modal.style.display = "flex";
};

// =============================================================================
// UTILIDADES
// =============================================================================
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
