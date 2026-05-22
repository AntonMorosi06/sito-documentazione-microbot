const formulas = {
  distance: {
    title: "Distanza euclidea",
    formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)",
    text: "Questa formula misura la distanza geometrica tra due MicroBot nel piano ed è il primo livello di lettura quantitativa della loro interazione.",
    extended: `
      <p>La distanza euclidea è la base di tutta la logica spaziale del sistema MicroBot. Prima ancora di parlare di elettromagnetismo, aggancio, consumo o stabilità, bisogna sapere dove si trovano i moduli e quanto siano lontani tra loro. Questa formula trasforma le coordinate in una grandezza scalare leggibile dal sistema di controllo.</p>
      <p>Nel progetto MicroBot questa distanza non è soltanto una misura geometrica astratta. Diventa una variabile decisionale. Da essa possono dipendere l’ingresso nella zona di aggancio, l’attivazione di una bobina, la scelta di correggere una traiettoria, la stima di vicinanza utile per la cooperazione e il controllo delle formazioni.</p>
      <p>Dal punto di vista ingegneristico, questa formula è il ponte tra lo spazio fisico e la logica del software. Il controller può leggere o stimare le posizioni dei moduli, applicare questa relazione e decidere se due unità debbano ancora essere trattate come separate oppure come candidate a una futura interazione magnetica.</p>
    `,
    variables: [
      ["x₁, y₁", "Coordinate del primo MicroBot nel piano."],
      ["x₂, y₂", "Coordinate del secondo MicroBot nel piano."],
      ["d", "Distanza finale tra le due unità."],
      ["Uso in MicroBot", "Serve per capire se due moduli sono abbastanza vicini da interagire."]
    ],
    calculator: "distance"
  },

  force: {
    title: "Seconda legge di Newton",
    formula: "F = m · a",
    text: "Questa relazione collega la forza applicata a un corpo con la massa del modulo e l’accelerazione che ne deriva.",
    extended: `
      <p>La formula F = m · a è una delle basi della meccanica classica e nel tuo progetto diventa fondamentale perché collega direttamente il mondo elettromagnetico al movimento reale. Il MicroBot non si muove perché esiste una formula elegante, ma perché una forza fisica concreta riesce a vincere inerzia, attrito e resistenze presenti nel sistema.</p>
      <p>Se la massa del modulo aumenta, a parità di forza disponibile l’accelerazione diminuisce. Questo significa che ogni scelta costruttiva, come batteria, struttura, bobine, magneti o guscio esterno, influisce sulle prestazioni dinamiche. Non stai progettando solo un oggetto elettronico, ma un piccolo corpo fisico che deve reagire a forze precise.</p>
      <p>Nel contesto del MicroBot questa formula serve a ragionare su miniaturizzazione, potenza magnetica necessaria, rapidità di risposta e compromesso tra stabilità e aggressività del moto.</p>
    `,
    variables: [
      ["F", "Forza risultante applicata al MicroBot."],
      ["m", "Massa del modulo."],
      ["a", "Accelerazione generata."],
      ["Uso in MicroBot", "Aiuta a ragionare su miniaturizzazione, attuazione e prestazioni."]
    ],
    calculator: "force"
  },

  friction: {
    title: "Attrito statico massimo",
    formula: "F_attr,max = μs · N",
    text: "Questa formula stima la massima forza di attrito statico prima dell’inizio dello scorrimento.",
    extended: `
      <p>L’attrito statico è una soglia fisica reale che il MicroBot deve superare per iniziare a muoversi oppure che deve mantenere per restare stabile in una configurazione di contatto. Nel tuo sistema è decisivo, perché rende chiaro che il comportamento non dipende solo dal campo magnetico teorico, ma dalla capacità effettiva di produrre una forza superiore alle resistenze meccaniche.</p>
      <p>Il coefficiente μs descrive quanto le superfici a contatto tendano a opporsi allo scorrimento, mentre N rappresenta la forza normale che le preme tra loro. Se la forza magnetica resta sotto questo valore limite, il sistema può risultare apparentemente attivo ma non produrre movimento osservabile.</p>
      <p>Questa formula è molto utile nelle stime d’ordine di grandezza della tenuta dell’aggancio. Ti permette di tradurre un’idea qualitativa, come “si attacca bene”, in una condizione quantitativa verificabile.</p>
    `,
    variables: [
      ["F_attr,max", "Massima forza di attrito statico."],
      ["μs", "Coefficiente di attrito statico."],
      ["N", "Forza normale tra le superfici."],
      ["Uso in MicroBot", "Serve per stimare la soglia minima di forza necessaria alla tenuta."]
    ],
    calculator: "friction"
  },

  magneticMoment: {
    title: "Momento magnetico totale",
    formula: "mᵢ = Nᵢ Iᵢ Aᵢ n̂ᵢ + mₚ,ᵢ",
    text: "Questa formula descrive il momento magnetico totale del MicroBot come somma di una parte attiva generata dalla bobina e di una parte passiva dovuta ai magneti permanenti.",
    extended: `
      <p>Questa è una delle formule più importanti dell’intero modello MicroBot. Il primo termine, Nᵢ Iᵢ Aᵢ n̂ᵢ, rappresenta il contributo controllabile della bobina. Qui il numero di spire, la corrente e l’area efficace della spira determinano quanto il modulo possa comportarsi come dipolo magnetico attivo. È il pezzo che il controller può modificare nel tempo.</p>
      <p>Il secondo termine, mₚ,ᵢ, rappresenta invece il contributo dei magneti permanenti interni. Questo rende il sistema ibrido. Il modulo non dipende solo dalla corrente istantanea, ma possiede anche una predisposizione passiva all’allineamento e al pre-aggancio. È una scelta molto intelligente perché aumenta la robustezza del comportamento senza richiedere sempre massima alimentazione elettrica.</p>
      <p>Dal punto di vista progettuale questa formula racconta l’identità magnetica del MicroBot. Non hai un semplice elettromagnete, ma un sistema in cui parte della risposta è attiva e parte è strutturale. Questo permette sia controllo dinamico sia stabilità locale.</p>
    `,
    variables: [
      ["Nᵢ", "Numero di spire della bobina del modulo i."],
      ["Iᵢ", "Corrente nella bobina."],
      ["Aᵢ", "Area efficace della spira."],
      ["n̂ᵢ", "Versore che descrive l’orientazione della bobina."],
      ["mₚ,ᵢ", "Contributo dei magneti permanenti interni."],
      ["mᵢ", "Momento magnetico totale del MicroBot."]
    ],
    calculator: null
  },

  field: {
    title: "Campo magnetico esterno",
    formula: "B_ext(rᵢ,t) = Σ [ μ₀ Nₖ Iₖ(t) / (2 Rₖ) ] (1 + xₖ(rᵢ)² / Rₖ²)^(-3/2) ẑₖ",
    text: "Questa formula descrive il campo magnetico generato dalle bobine e percepito dal MicroBot nel punto in cui si trova.",
    extended: `
      <p>Il campo magnetico esterno è il mezzo attraverso cui il MicroBot sente l’azione delle bobine del controller o di altre sorgenti magnetiche. La formula mostra che il campo dipende dalla permeabilità magnetica, dal numero di spire, dalla corrente e dalla geometria della bobina.</p>
      <p>La parte più interessante è il termine che contiene la distanza assiale. Questo fa capire che il campo non è uniforme nello spazio. Più il MicroBot si allontana dalla sorgente, più il campo si indebolisce. Proprio questa non uniformità è fondamentale, perché un campo che varia nello spazio può produrre un gradiente e quindi una forza.</p>
      <p>Dal punto di vista fisico, questa formula dice che il MicroBot si trova immerso in un ambiente magnetico che cambia con la posizione e col tempo. Quindi il comportamento non dipende solo da ciò che il modulo è, ma anche da dove si trova e da come evolve la corrente nelle bobine del sistema.</p>
    `,
    variables: [
      ["μ₀", "Permeabilità magnetica del vuoto."],
      ["Nₖ", "Numero di spire della bobina k."],
      ["Iₖ(t)", "Corrente nel tempo nella bobina k."],
      ["Rₖ", "Raggio della bobina."],
      ["xₖ(rᵢ)", "Distanza del punto rᵢ rispetto all’asse della bobina."],
      ["ẑₖ", "Direzione del campo lungo l’asse considerato."]
    ],
    calculator: null
  },

  voltage: {
    title: "Equazione circuitale della bobina",
    formula: "Vᵢ(t) = Rᵢ(Tᵢ) Iᵢ + Lᵢ dIᵢ/dt + d/dt [ Mᵢⱼ(r) Iⱼ ]",
    text: "Questa relazione descrive il comportamento elettrico reale della bobina, includendo resistenza, induttanza e accoppiamento con altri circuiti vicini.",
    extended: `
      <p>Questa formula è importantissima perché porta il modello fuori dall’idealizzazione. Il primo termine è la classica caduta resistiva, che può cambiare con la temperatura. Il secondo è il termine induttivo, cioè la parte che si oppone alle variazioni rapide di corrente. Questo significa che il campo magnetico non può accendersi e spegnersi in modo perfettamente istantaneo.</p>
      <p>Il terzo termine introduce la mutua induttanza, cioè l’effetto che una bobina o un modulo vicino può avere sul circuito considerato. Questo rende il sistema molto più interessante, perché i MicroBot non si influenzano solo meccanicamente o magneticamente a distanza, ma possono anche disturbarsi o accoppiarsi a livello elettromagnetico circuitale.</p>
      <p>Nel tuo progetto questa relazione è utile per capire i limiti della risposta dinamica del sistema. Se vuoi controllo rapido, devi comunque fare i conti con l’induttanza. Se hai moduli vicini, devi anche considerare eventuali interazioni non volute.</p>
    `,
    variables: [
      ["Vᵢ(t)", "Tensione applicata alla bobina del modulo i."],
      ["Rᵢ(Tᵢ)", "Resistenza elettrica, dipendente dalla temperatura."],
      ["Iᵢ", "Corrente nel circuito i."],
      ["Lᵢ", "Induttanza della bobina."],
      ["Mᵢⱼ(r)", "Mutua induttanza con un altro circuito o modulo."],
      ["Iⱼ", "Corrente nell’altro circuito."]
    ],
    calculator: null
  },

  thermal: {
    title: "Bilancio termico",
    formula: "C_th,ᵢ dTᵢ/dt = Iᵢ² Rᵢ(Tᵢ) - hᵢ (Tᵢ - T_amb)",
    text: "Questa formula descrive come il MicroBot si riscalda per effetto Joule e quanto calore riesce a dissipare verso l’ambiente.",
    extended: `
      <p>Ogni volta che fai passare corrente in una bobina stai generando anche calore. Nel MicroBot questo aspetto è critico perché le dimensioni ridotte riducono il volume disponibile per dissipare energia termica. Il termine Iᵢ² Rᵢ(Tᵢ) rappresenta proprio la potenza che viene trasformata in calore all’interno del sistema.</p>
      <p>Il termine hᵢ (Tᵢ - T_amb) descrive invece la capacità del modulo di cedere calore all’esterno. Se la dissipazione è bassa e la corrente resta elevata per troppo tempo, la temperatura sale, modificando la risposta elettrica, riducendo efficienza e potenzialmente danneggiando il comportamento complessivo.</p>
      <p>Questa formula è preziosa perché ti obbliga a vedere l’elettromagnetismo non come un fenomeno gratuito, ma come qualcosa che ha un costo energetico e termico. Più forza magnetica vuoi, più calore rischi di generare.</p>
    `,
    variables: [
      ["C_th,ᵢ", "Capacità termica equivalente del modulo."],
      ["Tᵢ", "Temperatura del MicroBot."],
      ["Iᵢ²Rᵢ(Tᵢ)", "Potenza termica generata per effetto Joule."],
      ["hᵢ", "Coefficiente di dissipazione termica."],
      ["T_amb", "Temperatura ambiente."]
    ],
    calculator: null
  },

  dipoleForce: {
    title: "Forza dipolo-dipolo",
    formula: "F_mag,ᵢⱼ = ∇ [ μ₀ / (4π rᵢⱼ³) ( 3(mᵢ·r̂ᵢⱼ)(mⱼ·r̂ᵢⱼ) - mᵢ·mⱼ ) ]",
    text: "Questa relazione modella l’interazione magnetica tra due MicroBot trattati come dipoli magnetici.",
    extended: `
      <p>Questa è una formula avanzata ma molto potente. All’interno delle parentesi c’è l’energia di interazione tra due dipoli magnetici, mentre il gradiente esterno la trasforma in forza. Significa che due MicroBot possono attrarsi o respingersi non solo in base all’intensità dei loro momenti magnetici, ma anche in base alla loro orientazione reciproca e alla direzione che li separa.</p>
      <p>Il termine 1/rᵢⱼ³ mostra che l’interazione cresce fortemente quando la distanza diminuisce. Questo spiega bene perché moduli apparentemente poco influenti a distanza possano diventare molto efficaci appena entrano nella zona ravvicinata di contatto.</p>
      <p>Questa formula è perfetta per spiegare il cuore fisico dell’aggancio magnetico. L’assetto geometrico dei dipoli, la disposizione dei magneti e l’orientazione delle bobine non sono dettagli secondari, ma parti centrali della dinamica del sistema.</p>
    `,
    variables: [
      ["μ₀", "Permeabilità magnetica del vuoto."],
      ["rᵢⱼ", "Distanza tra i due MicroBot."],
      ["r̂ᵢⱼ", "Versore che collega i due moduli."],
      ["mᵢ, mⱼ", "Momenti magnetici dei due MicroBot."],
      ["∇", "Operatore gradiente che trasforma energia in forza."]
    ],
    calculator: null
  },

  attachCondition: {
    title: "Condizione reale di aggancio",
    formula: "|F_mag,ᵢⱼ| > F_attrito + F_disturbo + m g sinα",
    text: "Questa disuguaglianza stabilisce quando la forza magnetica è davvero sufficiente per produrre aggancio reale e non solo teorico.",
    extended: `
      <p>Questa è la formula che collega il campo magnetico al mondo reale. Non basta che due moduli si attraggano in teoria: la forza risultante deve essere abbastanza alta da superare attrito, disturbi, vibrazioni e persino eventuale inclinazione del piano di appoggio.</p>
      <p>Il termine F_attrito rappresenta la soglia meccanica minima da vincere. F_disturbo raccoglie tutte le perturbazioni del sistema reale, come micro-urti, errori di allineamento o effetti dinamici locali. Il termine m g sinα tiene conto della componente del peso lungo una superficie inclinata.</p>
      <p>Questa relazione è molto forte dal punto di vista concettuale perché distingue l’elettromagnetismo ideale dal comportamento fisico osservabile. Se vuoi dimostrare che il MicroBot si aggancia davvero, devi passare per questa soglia.</p>
    `,
    variables: [
      ["|F_mag,ᵢⱼ|", "Modulo della forza magnetica disponibile."],
      ["F_attrito", "Forza resistente dovuta all’attrito."],
      ["F_disturbo", "Disturbi meccanici o dinamici presenti."],
      ["m g sinα", "Componente del peso lungo il piano inclinato."],
      ["Condizione", "L’aggancio reale avviene solo se la forza magnetica supera tutte queste soglie."]
    ],
    calculator: null
  },

  masterForce: {
    title: "Formula madre del MicroBot",
    formula: "Fᵢ = ∇ [ mᵢ · B_tot(rᵢ,t) ]",
    text: "Questa è la formula sintetica più importante: il MicroBot subisce una forza perché il suo momento magnetico interagisce con un campo totale non uniforme.",
    extended: `
      <p>Questa è la formula più elegante e più importante di tutto il modello. Il prodotto scalare mᵢ · B_tot rappresenta l’energia potenziale magnetica del modulo immerso nel campo totale. Il gradiente di questa energia produce la forza. In altre parole, il MicroBot tende a muoversi verso configurazioni energeticamente più favorevoli.</p>
      <p>Se il campo fosse uniforme, il modulo tenderebbe soprattutto a orientarsi. Ma quando il campo varia nello spazio, compare una forza netta di traslazione. Questo è il meccanismo che permette avvicinamento, allineamento, aggancio, stabilizzazione e anche distacco controllato quando cambiano le condizioni di campo.</p>
      <p>Questa formula può essere considerata la sintesi concettuale del tuo progetto: il controller modifica correnti, le correnti modificano i momenti magnetici e il campo totale, il campo totale ridefinisce il paesaggio energetico del sistema, e il MicroBot reagisce muovendosi dentro quel paesaggio.</p>
    `,
    variables: [
      ["Fᵢ", "Forza totale sul MicroBot i."],
      ["∇", "Gradiente spaziale dell’energia magnetica."],
      ["mᵢ", "Momento magnetico del modulo."],
      ["B_tot(rᵢ,t)", "Campo magnetico totale nel punto occupato dal MicroBot."],
      ["Interpretazione", "La forza nasce dalla variazione spaziale dell’energia magnetica."]
    ],
    calculator: null
  },

  ohm: {
    title: "Legge di Ohm",
    formula: "V = R · I",
    text: "Questa formula collega tensione, resistenza e corrente ed è una delle basi per capire come si comportano i circuiti elettrici del MicroBot.",
    extended: `
      <p>La legge di Ohm è una delle relazioni più semplici e più importanti dell’elettronica. Nel contesto del MicroBot ti permette di collegare in modo immediato la tensione disponibile, la corrente che scorre e la resistenza equivalente del circuito o della bobina.</p>
      <p>Questa formula è fondamentale perché mostra che la corrente non è una quantità indipendente. Dipende sia dalla tensione di alimentazione sia dalla resistenza del percorso elettrico. Se la resistenza aumenta, a parità di tensione, la corrente diminuisce. Se invece la tensione aumenta, la corrente tende ad aumentare.</p>
      <p>Nel tuo progetto questa relazione è utile per ragionare su alimentazione delle bobine, limiti di corrente, consumi e comportamento dei moduli durante le fasi operative. È la base minima per ogni analisi elettrica più avanzata.</p>
    `,
    variables: [
      ["V", "Tensione applicata al circuito o alla bobina."],
      ["R", "Resistenza elettrica equivalente."],
      ["I", "Corrente che attraversa il circuito."],
      ["Uso in MicroBot", "Serve per stimare corrente, limiti elettrici e comportamento dell’alimentazione."]
    ],
    calculator: "ohm"
  },

  joule: {
    title: "Effetto Joule",
    formula: "P_J = I² · R",
    text: "Questa formula descrive la potenza dissipata in calore quando la corrente attraversa una resistenza.",
    extended: `
      <p>L’effetto Joule è uno dei punti più importanti da considerare nel MicroBot, perché ogni volta che fai passare corrente in una bobina o in un conduttore, una parte dell’energia elettrica viene convertita in calore. Questo significa che il controllo elettromagnetico ha sempre un costo termico.</p>
      <p>La formula mostra una cosa molto forte: la potenza termica cresce con il quadrato della corrente. Questo vuol dire che piccoli aumenti di corrente possono produrre aumenti molto più grandi della dissipazione. È proprio qui che entrano in gioco i limiti reali del sistema.</p>
      <p>Nel MicroBot questa formula è decisiva per capire surriscaldamento, efficienza, durata della batteria e rischio di degradazione dei componenti. Più vuoi spingere la parte magnetica, più devi stare attento alla parte termica.</p>
    `,
    variables: [
      ["P_J", "Potenza dissipata sotto forma di calore."],
      ["I", "Corrente che attraversa il circuito."],
      ["R", "Resistenza elettrica del circuito o della bobina."],
      ["Uso in MicroBot", "Serve per stimare il riscaldamento interno dovuto all’alimentazione."]
    ],
    calculator: "joule"
  },

  inductiveEnergy: {
    title: "Energia nell’induttanza",
    formula: "E_L = 1/2 · L · I²",
    text: "Questa formula descrive l’energia immagazzinata nel campo magnetico di una bobina attraversata da corrente.",
    extended: `
      <p>Una bobina non si limita a lasciar passare corrente, ma immagazzina energia nel campo magnetico che genera. La formula E_L = 1/2 · L · I² quantifica proprio questa energia magnetica associata all’induttanza del circuito.</p>
      <p>Questo è molto importante nel progetto MicroBot perché rende chiaro che la bobina non è solo un utilizzatore di potenza, ma un elemento dinamico che accumula energia e la rilascia secondo tempi e modalità non istantanei. L’energia magnetica disponibile dipende sia dall’induttanza sia dal quadrato della corrente.</p>
      <p>Dal punto di vista progettuale questa formula ti aiuta a capire quanta energia viene temporaneamente “tenuta” nel campo magnetico e quindi quanto il sistema possa reagire, accumulare e dissipare nel passaggio da uno stato all’altro.</p>
    `,
    variables: [
      ["E_L", "Energia immagazzinata nell’induttanza."],
      ["L", "Induttanza della bobina."],
      ["I", "Corrente che attraversa la bobina."],
      ["Uso in MicroBot", "Serve per capire accumulo energetico nel campo magnetico."]
    ],
    calculator: null
  },

  rlCurrent: {
    title: "Corrente nel circuito RL",
    formula: "I(t) = (V/R)(1 - e^(-tR/L))",
    text: "Questa formula descrive come cresce la corrente in un circuito RL dopo l’applicazione della tensione.",
    extended: `
      <p>Questa relazione è importantissima perché mostra che la corrente nella bobina non sale in modo istantaneo. Quando applichi una tensione a un circuito RL, la presenza dell’induttanza rallenta la crescita della corrente. Il sistema quindi ha una risposta graduale, non immediata.</p>
      <p>Nel MicroBot questo significa che anche il campo magnetico generato dalla bobina non compare tutto insieme in un singolo istante. Serve un certo tempo affinché la corrente si avvicini al suo valore di regime. Questo influenza sincronizzazione, rapidità di risposta e precisione del controllo.</p>
      <p>Questa formula è molto utile per spiegare perché il comportamento reale di un modulo magnetico è sempre dinamico. Tra comando elettrico e risposta magnetica esiste un transitorio, ed è proprio lì che si gioca una parte importante della qualità del sistema.</p>
    `,
    variables: [
      ["I(t)", "Corrente nel tempo."],
      ["V", "Tensione applicata al circuito."],
      ["R", "Resistenza totale del circuito."],
      ["L", "Induttanza della bobina."],
      ["t", "Tempo trascorso dall’applicazione della tensione."],
      ["Uso in MicroBot", "Serve per descrivere il transitorio di attivazione delle bobine."]
    ],
    calculator: null
  },

  rlTau: {
    title: "Costante di tempo RL",
    formula: "τ = L / R",
    text: "Questa formula definisce la rapidità caratteristica con cui un circuito RL risponde ai cambiamenti di tensione.",
    extended: `
      <p>La costante di tempo τ è una misura sintetica della velocità di risposta di un circuito RL. Se τ è grande, la corrente sale lentamente. Se τ è piccola, la risposta è più rapida. In questo senso rappresenta uno dei parametri più utili per capire se il sistema sarà reattivo oppure lento.</p>
      <p>Nel MicroBot questa formula è preziosa perché ti consente di confrontare configurazioni diverse di bobine e circuiti. Aumentare l’induttanza tende a rallentare il sistema, mentre aumentare la resistenza riduce la costante di tempo ma porta altre conseguenze energetiche e dissipative.</p>
      <p>Dal punto di vista ingegneristico, τ è una specie di impronta dinamica del canale elettromagnetico. Ti dice in quanto tempo la risposta comincia a diventare significativa e quanto il comando elettrico sia realmente rapido nel mondo fisico.</p>
    `,
    variables: [
      ["τ", "Costante di tempo del circuito RL."],
      ["L", "Induttanza della bobina."],
      ["R", "Resistenza del circuito."],
      ["Uso in MicroBot", "Serve per stimare la velocità caratteristica di risposta magnetica."]
    ],
    calculator: null
  },

  magneticPotential: {
    title: "Energia potenziale magnetica",
    formula: "U = - m · B",
    text: "Questa formula descrive l’energia potenziale di un dipolo magnetico immerso in un campo magnetico.",
    extended: `
      <p>L’energia potenziale magnetica è una delle chiavi concettuali più forti per capire il MicroBot. Il prodotto scalare tra il momento magnetico e il campo descrive quanto una certa configurazione sia energeticamente favorevole oppure sfavorevole.</p>
      <p>Il segno meno indica che il sistema tende spontaneamente verso configurazioni in cui il momento magnetico si allinea al campo, abbassando l’energia totale. In pratica il MicroBot “preferisce” certe orientazioni rispetto ad altre. Questo spiega molte dinamiche di allineamento e stabilizzazione.</p>
      <p>Questa formula è fondamentale perché ti permette di leggere l’elettromagnetismo non solo come forza, ma come paesaggio energetico. Il modulo si muove e si orienta cercando stati più convenienti dal punto di vista dell’energia.</p>
    `,
    variables: [
      ["U", "Energia potenziale magnetica."],
      ["m", "Momento magnetico del modulo."],
      ["B", "Campo magnetico nel punto considerato."],
      ["Uso in MicroBot", "Serve per interpretare allineamento, stabilità e tendenza al contatto."]
    ],
    calculator: null
  },

  magneticTorque: {
    title: "Coppia magnetica",
    formula: "τ_mag = m × B",
    text: "Questa formula descrive la coppia che tende a ruotare un dipolo magnetico all’interno di un campo magnetico.",
    extended: `
      <p>Non tutte le interazioni magnetiche producono uno spostamento lineare. Spesso il primo effetto osservabile è una rotazione. La coppia magnetica tende infatti ad allineare il momento magnetico del modulo alla direzione del campo esterno.</p>
      <p>Nel MicroBot questa formula è molto utile perché spiega come un modulo possa orientarsi correttamente prima ancora di produrre o subire una forza netta di traslazione. In un sistema con magneti permanenti e bobine, l’orientamento è spesso decisivo per rendere possibile un aggancio pulito e stabile.</p>
      <p>Dal punto di vista progettuale, la coppia magnetica aiuta a capire perché la disposizione interna dei poli e l’orientazione del modulo siano così importanti. Un modulo disallineato può non agganciarsi bene anche se la forza disponibile non è trascurabile.</p>
    `,
    variables: [
      ["τ_mag", "Coppia magnetica risultante."],
      ["m", "Momento magnetico del MicroBot."],
      ["B", "Campo magnetico applicato."],
      ["Uso in MicroBot", "Serve per spiegare orientamento e pre-allineamento magnetico."]
    ],
    calculator: null
  },

  totalForce: {
    title: "Forza totale semplificata",
    formula: "F_tot = F_mag - F_attr - γv",
    text: "Questa formula riassume in forma semplice il bilancio tra forza magnetica utile, attrito e dissipazione dinamica.",
    extended: `
      <p>Questa relazione è molto utile perché mette in una sola riga il cuore del problema dinamico. Il MicroBot non si muove solo in funzione della forza magnetica disponibile, ma in funzione della forza residua che resta dopo aver sottratto gli effetti resistenti del sistema.</p>
      <p>Il termine F_mag rappresenta il contributo utile generato dal campo magnetico. F_attr rappresenta la resistenza dovuta all’attrito. Il termine γv modella una dissipazione dipendente dalla velocità, utile per rappresentare in modo semplificato perdite viscose, smorzamento o resistenze al moto.</p>
      <p>Questa formula è ottima da usare nel sito perché è intuitiva ma resta seria. Fa vedere subito che il comportamento del MicroBot nasce da un equilibrio tra spinta e resistenza, non da una sola causa isolata.</p>
    `,
    variables: [
      ["F_tot", "Forza totale risultante sul modulo."],
      ["F_mag", "Forza magnetica utile."],
      ["F_attr", "Forza resistente dovuta all’attrito."],
      ["γv", "Termine dissipativo proporzionale alla velocità."],
      ["Uso in MicroBot", "Serve per descrivere il bilancio dinamico in modo compatto."]
    ],
    calculator: null
  },

  batteryLife: {
    title: "Autonomia stimata",
    formula: "t_batt ≈ C / I_medio",
    text: "Questa formula fornisce una stima semplificata della durata della batteria in funzione della capacità e della corrente media assorbita.",
    extended: `
      <p>Ogni sistema mobile reale deve fare i conti con l’autonomia. Questa formula fornisce una stima semplice ma molto utile della durata teorica della batteria: più grande è la capacità disponibile, maggiore sarà il tempo operativo; più alta è la corrente media assorbita, minore sarà l’autonomia.</p>
      <p>Nel MicroBot questa relazione è preziosa perché collega immediatamente la complessità funzionale del modulo al suo costo energetico. LED, controllo, comunicazione, bobine e sensori contribuiscono tutti alla corrente media complessiva.</p>
      <p>Anche se si tratta di una formula semplificata, è perfetta per il sito perché fa entrare subito una domanda concreta: quanta intelligenza, quanta potenza magnetica e quanta operatività reale posso permettermi con una batteria di dimensioni ridotte?</p>
    `,
    variables: [
      ["t_batt", "Autonomia stimata della batteria."],
      ["C", "Capacità disponibile della batteria."],
      ["I_medio", "Corrente media assorbita dal sistema."],
      ["Uso in MicroBot", "Serve per stimare la durata operativa del modulo."]
    ],
    calculator: null
  },

  hysteresis: {
    title: "Isteresi completa di aggancio",
    formula: "attach se d ≤ d_attach , detach se d ≥ d_detach",
    text: "Questa relazione logica descrive il comportamento con isteresi, utile per evitare continui cambi di stato vicino alla soglia.",
    extended: `
      <p>L’isteresi è una scelta fondamentale nei sistemi reali perché impedisce oscillazioni fastidiose attorno a un unico valore limite. Se il MicroBot usasse una sola soglia per aggancio e sgancio, un piccolo rumore o una minima oscillazione della distanza potrebbe causare continui cambi di stato.</p>
      <p>Con due soglie diverse, una più bassa per agganciare e una più alta per sganciare, il comportamento diventa molto più robusto. Una volta entrato nello stato di contatto, il sistema non lo abbandona immediatamente al minimo disturbo.</p>
      <p>Nel tuo progetto questa è una formula logica ma importantissima, perché traduce la fisica rumorosa del mondo reale in una decisione stabile e controllata. È uno dei modi più intelligenti per rendere il comportamento del MicroBot pulito e affidabile.</p>
    `,
    variables: [
      ["d", "Distanza attuale tra due moduli."],
      ["d_attach", "Soglia inferiore per consentire l’aggancio."],
      ["d_detach", "Soglia superiore per consentire lo sgancio."],
      ["Uso in MicroBot", "Serve per evitare commutazioni continue vicino ai limiti operativi."]
    ],
    calculator: null
  }
};

const microbotLiveConfig = {
  attachThreshold: 120,
  detachThreshold: 155,
  disturb: 0.08,
  mass: 0.05,
  mu: 0.45,
  normal: 1.8,
  current: 0.25,
  turns: 120,
  area: 0.00012
};

document.addEventListener("DOMContentLoaded", () => {
  initFormulaCards();
  initReveal();
  initMouseGlow();
  initFormulaBackgroundParallax();
  initGraphs();
  initVisualTilt();
  initDistanceSimulation();
  initControlPanel();
});

function initFormulaCards() {
  const cards = document.querySelectorAll(".equation-card");
  const detailTitle = document.getElementById("detailTitle");
  const detailFormula = document.getElementById("detailFormula");
  const detailText = document.getElementById("detailText");
  const detailVars = document.getElementById("detailVars");
  const detailExtended = document.getElementById("detailExtended");
  const accordionToggle = document.getElementById("accordionToggle");
  const accordionContent = document.getElementById("accordionContent");
  const calculatorContainer = document.getElementById("distanceCalculator");

  if (!cards.length || !detailTitle || !detailFormula || !detailText || !detailVars || !detailExtended) {
    return;
  }

  const accordionLabel = accordionToggle?.querySelector("span:first-child") || null;
  const accordionIcon = accordionToggle?.querySelector(".accordion-icon") || null;

  function closeAccordion() {
    if (!accordionToggle || !accordionContent) return;

    accordionToggle.setAttribute("aria-expanded", "false");
    accordionContent.classList.remove("open");

    if (accordionIcon) accordionIcon.textContent = "+";
    if (accordionLabel) accordionLabel.textContent = "Apri spiegazione approfondita";
  }

  function setupAccordion() {
    if (!accordionToggle || !accordionContent) return;

    accordionToggle.addEventListener("click", () => {
      const isOpen = accordionContent.classList.contains("open");

      if (isOpen) {
        accordionContent.classList.remove("open");
        accordionToggle.setAttribute("aria-expanded", "false");
        if (accordionIcon) accordionIcon.textContent = "+";
        if (accordionLabel) accordionLabel.textContent = "Apri spiegazione approfondita";
      } else {
        accordionContent.classList.add("open");
        accordionToggle.setAttribute("aria-expanded", "true");
        if (accordionIcon) accordionIcon.textContent = "−";
        if (accordionLabel) accordionLabel.textContent = "Chiudi spiegazione approfondita";
      }
    });
  }

  function renderCalculator(type) {
    if (!calculatorContainer) return;

    const calculatorTemplates = {
      distance: `
        <p class="tag">Calcolatore rapido</p>
        <p>Inserisci due posizioni nel piano e il sito calcolerà la distanza tra i due MicroBot.</p>
        <div class="calc-grid">
          <div class="field"><label for="c1">x₁</label><input id="c1" type="number" value="0" step="0.1"></div>
          <div class="field"><label for="c2">y₁</label><input id="c2" type="number" value="0" step="0.1"></div>
          <div class="field"><label for="c3">x₂</label><input id="c3" type="number" value="4" step="0.1"></div>
          <div class="field"><label for="c4">y₂</label><input id="c4" type="number" value="3" step="0.1"></div>
        </div>
        <div class="calc-result" id="calcResult"></div>
      `,
      force: `
        <p class="tag">Calcolatore rapido</p>
        <p>Inserisci massa e accelerazione per stimare la forza risultante.</p>
        <div class="calc-grid">
          <div class="field"><label for="c1">m</label><input id="c1" type="number" value="0.05" step="0.01"></div>
          <div class="field"><label for="c2">a</label><input id="c2" type="number" value="2" step="0.1"></div>
        </div>
        <div class="calc-result" id="calcResult"></div>
      `,
      friction: `
        <p class="tag">Calcolatore rapido</p>
        <p>Inserisci coefficiente di attrito statico e forza normale.</p>
        <div class="calc-grid">
          <div class="field"><label for="c1">μs</label><input id="c1" type="number" value="0.45" step="0.01"></div>
          <div class="field"><label for="c2">N</label><input id="c2" type="number" value="1.8" step="0.1"></div>
        </div>
        <div class="calc-result" id="calcResult"></div>
      `,
      ohm: `
        <p class="tag">Calcolatore rapido</p>
        <p>Inserisci resistenza e corrente per stimare la tensione.</p>
        <div class="calc-grid">
          <div class="field"><label for="c1">R</label><input id="c1" type="number" value="12" step="0.1"></div>
          <div class="field"><label for="c2">I</label><input id="c2" type="number" value="0.25" step="0.01"></div>
        </div>
        <div class="calc-result" id="calcResult"></div>
      `,
      joule: `
        <p class="tag">Calcolatore rapido</p>
        <p>Inserisci corrente e resistenza per stimare la potenza dissipata in calore.</p>
        <div class="calc-grid">
          <div class="field"><label for="c1">I</label><input id="c1" type="number" value="0.25" step="0.01"></div>
          <div class="field"><label for="c2">R</label><input id="c2" type="number" value="12" step="0.1"></div>
        </div>
        <div class="calc-result" id="calcResult"></div>
      `
    };

    if (!type || !calculatorTemplates[type]) {
      calculatorContainer.style.display = "none";
      calculatorContainer.innerHTML = "";
      return;
    }

    calculatorContainer.style.display = "block";
    calculatorContainer.innerHTML = calculatorTemplates[type];
    bindCalculator(type);
  }

  function bindCalculator(type) {
    if (!calculatorContainer) return;

    const inputs = calculatorContainer.querySelectorAll("input");
    const result = document.getElementById("calcResult");
    if (!result) return;

    const update = () => {
      const values = Array.from(inputs).map((input) => parseFloat(input.value || "0"));

      switch (type) {
        case "distance": {
          const [x1, y1, x2, y2] = values;
          const dx = x2 - x1;
          const dy = y2 - y1;
          const d = Math.sqrt(dx * dx + dy * dy);
          result.innerHTML = `
            Differenza sull’asse x: <span class="calc-value">${dx.toFixed(2)}</span><br>
            Differenza sull’asse y: <span class="calc-value">${dy.toFixed(2)}</span><br>
            Distanza risultante: <span class="calc-value">${d.toFixed(4)}</span>
          `;
          break;
        }

        case "force": {
          const [m, a] = values;
          const F = m * a;
          result.innerHTML = `Forza risultante: <span class="calc-value">${F.toFixed(4)}</span>`;
          break;
        }

        case "friction": {
          const [mu, normal] = values;
          const force = mu * normal;
          result.innerHTML = `Attrito statico massimo: <span class="calc-value">${force.toFixed(4)}</span>`;
          break;
        }

        case "ohm": {
          const [R, I] = values;
          const V = R * I;
          result.innerHTML = `Tensione stimata: <span class="calc-value">${V.toFixed(4)}</span>`;
          break;
        }

        case "joule": {
          const [I, R] = values;
          const P = I * I * R;
          result.innerHTML = `Potenza termica dissipata: <span class="calc-value">${P.toFixed(4)}</span>`;
          break;
        }

        default:
          result.innerHTML = "";
      }
    };

    inputs.forEach((input) => input.addEventListener("input", update));
    update();
  }

  function renderFormula(key) {
    const data = formulas[key];
    if (!data) return;

    detailTitle.textContent = data.title;
    detailFormula.textContent = data.formula;
    detailText.textContent = data.text;
    detailExtended.innerHTML = data.extended || "<p>Nessun approfondimento disponibile.</p>";

    detailVars.innerHTML = data.variables
      .map(
        ([name, desc]) => `
          <div class="var-item">
            <strong>${name}</strong>
            <span>${desc}</span>
          </div>
        `
      )
      .join("");

    renderCalculator(data.calculator);
    closeAccordion();
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      renderFormula(card.dataset.key);
    });
  });

  setupAccordion();
  renderFormula("distance");
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initMouseGlow() {
  let rafId = null;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;

  window.addEventListener("mousemove", (event) => {
    mx = event.clientX;
    my = event.clientY;

    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mouse-x", `${mx}px`);
      document.documentElement.style.setProperty("--mouse-y", `${my}px`);
      rafId = null;
    });
  });
}

function initFormulaBackgroundParallax() {
  const formulasBg = document.querySelectorAll(".bg-formula");
  if (!formulasBg.length) return;

  window.addEventListener("mousemove", (event) => {
    const xRatio = event.clientX / window.innerWidth - 0.5;
    const yRatio = event.clientY / window.innerHeight - 0.5;

    formulasBg.forEach((item, index) => {
      const factor = (index + 1) * 2.2;
      const x = xRatio * factor * 6;
      const y = yRatio * factor * 4;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

function initVisualTilt() {
  const cards = document.querySelectorAll(".equation-card, .panel, .text-card, .graph-card, .stat, .visual-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rx = ((y / rect.height) - 0.5) * -4;
      const ry = ((x / rect.width) - 0.5) * 4;

      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initGraphs() {
  const chartConfigs = [
    {
      id: "distanceCanvas",
      data: [9.4, 8.7, 7.6, 6.4, 5.2, 4.1, 3.3, 2.9, 2.5, 2.2],
      mode: "line",
      explanation: "La distanza si riduce nel tempo e il sistema entra progressivamente nella zona in cui l’interazione tra i MicroBot può diventare fisicamente rilevante."
    },
    {
      id: "velocityCanvas",
      data: [0.2, 0.4, 0.8, 1.1, 1.3, 1.15, 0.95, 0.7, 0.45, 0.2],
      mode: "line",
      explanation: "La velocità cresce durante l’avvicinamento iniziale, poi si riduce quando il sistema entra nella fase di controllo più fine vicino alla soglia di contatto."
    },
    {
      id: "accelerationCanvas",
      data: [0.1, 0.3, 0.55, 0.7, 0.45, 0.1, -0.15, -0.28, -0.18, -0.05],
      mode: "line",
      explanation: "L’accelerazione evidenzia la fase di spinta iniziale e poi la frenata o correzione necessaria per evitare instabilità e overshoot vicino all’aggancio."
    },
    {
      id: "forceCanvas",
      data: [0.1, 0.14, 0.2, 0.28, 0.37, 0.51, 0.66, 0.79, 0.9, 1.0],
      mode: "area",
      explanation: "La forza di interazione cresce all’avvicinarsi dei moduli, mostrando perché il comportamento magnetico diventa molto più incisivo a distanza ridotta."
    },
    {
      id: "frictionThresholdCanvas",
      data: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45],
      mode: "line",
      explanation: "La soglia d’attrito resta quasi costante e rappresenta la barriera minima che la forza magnetica deve superare per produrre movimento o tenuta reale."
    },
    {
      id: "totalForceCanvas",
      data: [-0.2, -0.1, 0.02, 0.08, 0.18, 0.27, 0.36, 0.41, 0.39, 0.35],
      mode: "line",
      explanation: "La forza totale mostra il bilancio reale del sistema: inizialmente insufficiente, poi positiva quando l’interazione magnetica supera attrito e dissipazione."
    },
    {
      id: "rlCurrentCanvas",
      data: [0.05, 0.12, 0.22, 0.34, 0.48, 0.6, 0.7, 0.78, 0.84, 0.88],
      mode: "line",
      explanation: "La corrente RL cresce progressivamente, evidenziando che la bobina non raggiunge subito il regime ma attraversa un transitorio controllato dall’induttanza."
    },
    {
      id: "powerCanvas",
      data: [0.2, 0.32, 0.46, 0.61, 0.78, 0.91, 0.96, 0.92, 0.86, 0.8],
      mode: "line",
      explanation: "La potenza assorbita aumenta durante la fase attiva del sistema e tende poi a stabilizzarsi o ridursi quando il controllo diventa meno aggressivo."
    },
    {
      id: "energyCanvas",
      data: [0.2, 0.35, 0.55, 0.82, 1.1, 1.45, 1.84, 2.2, 2.65, 3.1],
      mode: "line",
      explanation: "L’energia cumulata mostra il costo totale dell’operazione: anche se la potenza istantanea varia, il consumo complessivo continua a crescere."
    },
    {
      id: "fieldCanvas",
      data: [1.0, 0.87, 0.74, 0.61, 0.5, 0.39, 0.3, 0.22, 0.15, 0.1],
      mode: "line",
      explanation: "Il campo magnetico decresce con la distanza dalla sorgente, rendendo evidente quanto la geometria spaziale influenzi l’efficacia dell’interazione."
    },
    {
      id: "potentialCanvas",
      data: [0.9, 0.72, 0.54, 0.35, 0.18, 0.02, -0.12, -0.24, -0.31, -0.36],
      mode: "line",
      explanation: "L’energia potenziale magnetica si abbassa quando il sistema si avvicina a configurazioni più favorevoli, mostrando la tendenza naturale verso l’allineamento."
    },
    {
      id: "torqueCanvas",
      data: [0.0, 0.22, 0.42, 0.6, 0.74, 0.8, 0.74, 0.58, 0.32, 0.0],
      mode: "line",
      explanation: "La coppia magnetica cresce con il disallineamento fino a una zona massima e poi si riduce, spiegando come il modulo venga ruotato verso il campo."
    },
    {
      id: "temperatureCanvas",
      data: [25, 27, 29.5, 32, 34.8, 37.1, 38.6, 39.4, 39.8, 40],
      mode: "line",
      explanation: "La temperatura cresce nel tempo a causa della dissipazione elettrica, poi tende a una zona di equilibrio quando produzione e dispersione di calore si compensano."
    },
    {
      id: "hysteresisCanvas",
      data: [5.2, 4.9, 4.5, 4.1, 3.6, 3.1, 2.9, 3.2, 3.8, 4.4],
      mode: "line",
      explanation: "La curva attraversa una regione in cui l’isteresi impedisce cambi di stato continui, stabilizzando il comportamento vicino alle soglie operative."
    },
    {
      id: "stateCanvas",
      data: [0, 0, 1, 1, 1, 2, 2, 2, 1, 0],
      mode: "line",
      explanation: "Lo stato logico del sistema passa da fuori soglia a pending e poi ad aggancio attivo, mostrando il carattere discreto del controllo sopra una dinamica continua."
    }
  ];

  chartConfigs.forEach((config) => {
    const canvas = document.getElementById(config.id);
    if (!canvas) return;

    setupHiDPICanvas(canvas);
    animateLineChart(canvas, config.data, config.mode);
    attachGraphExplanation(canvas, config.explanation);
  });
}

function setupHiDPICanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const displayWidth = canvas.clientWidth || canvas.width;
  const displayHeight = canvas.clientHeight || canvas.height;

  canvas.width = Math.round(displayWidth * ratio);
  canvas.height = Math.round(displayHeight * ratio);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawAxes(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.moveTo(36, 12);
  ctx.lineTo(36, height - 28);
  ctx.lineTo(width - 12, height - 28);
  ctx.stroke();

  for (let i = 1; i <= 4; i += 1) {
    const y = 12 + i * ((height - 40) / 5);
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.beginPath();
    ctx.moveTo(36, y);
    ctx.lineTo(width - 12, y);
    ctx.stroke();
  }
}

function animateLineChart(canvas, values, mode = "line") {
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth || 360;
  const height = canvas.clientHeight || 220;

  const max = Math.max(...values);
  const min = Math.min(...values);
  const plotW = width - 60;
  const plotH = height - 50;

  let progress = 0;

  function render() {
    drawAxes(ctx, width, height);

    const visibleCount = Math.max(2, Math.floor(progress * values.length));
    const currentValues = values.slice(0, visibleCount);

    if (mode === "area") {
      ctx.beginPath();

      currentValues.forEach((value, index) => {
        const x = 36 + (index / (values.length - 1)) * plotW;
        const y = 12 + ((max - value) / (max - min || 1)) * plotH;

        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      const lastIndex = currentValues.length - 1;
      const lastX = 36 + (lastIndex / (values.length - 1)) * plotW;
      ctx.lineTo(lastX, height - 28);
      ctx.lineTo(36, height - 28);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 12, 0, height - 28);
      gradient.addColorStop(0, "rgba(100,240,210,0.35)");
      gradient.addColorStop(1, "rgba(100,240,210,0.02)");
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = mode === "area" ? "rgba(100,240,210,0.95)" : "rgba(135,168,255,0.95)";
    ctx.beginPath();

    currentValues.forEach((value, index) => {
      const x = 36 + (index / (values.length - 1)) * plotW;
      const y = 12 + ((max - value) / (max - min || 1)) * plotH;

      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.stroke();

    ctx.fillStyle = mode === "area" ? "rgba(100,240,210,0.85)" : "rgba(135,168,255,0.85)";

    currentValues.forEach((value, index) => {
      const x = 36 + (index / (values.length - 1)) * plotW;
      const y = 12 + ((max - value) / (max - min || 1)) * plotH;

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    progress += 0.025;

    if (progress <= 1.02) {
      requestAnimationFrame(render);
    }
  }

  render();
}

function attachGraphExplanation(canvas, explanation) {
  const card = canvas.closest(".graph-card");
  const explainer = document.getElementById("graphExplainer");
  if (!card || !explainer) return;

  const activate = () => {
    document.querySelectorAll(".graph-card").forEach((item) => item.classList.remove("active-graph"));
    card.classList.add("active-graph");
    explainer.textContent = explanation;
  };

  card.addEventListener("mouseenter", activate);
  card.addEventListener("click", activate);
}

function initControlPanel() {
  const controls = [
    ["attachThresholdRange", "attachThresholdValue", "attachThreshold", 0],
    ["detachThresholdRange", "detachThresholdValue", "detachThreshold", 0],
    ["disturbRange", "disturbValue", "disturb", 2],
    ["massRange", "massValue", "mass", 2],
    ["muRange", "muValue", "mu", 2],
    ["normalRange", "normalValue", "normal", 2],
    ["currentRange", "currentValue", "current", 2],
    ["turnsRange", "turnsValue", "turns", 0],
    ["areaRange", "areaValue", "area", 5]
  ];

  let hasAtLeastOneControl = false;

  controls.forEach(([inputId, valueId, key, decimals]) => {
    const input = document.getElementById(inputId);
    const value = document.getElementById(valueId);
    if (!input || !value) return;

    hasAtLeastOneControl = true;

    const update = () => {
      const numericValue = parseFloat(input.value);
      microbotLiveConfig[key] = numericValue;
      value.textContent = decimals > 0 ? numericValue.toFixed(decimals) : String(Math.round(numericValue));
      updateLiveSystemMetrics();
    };

    input.addEventListener("input", update);
    update();
  });

  if (hasAtLeastOneControl) {
    updateLiveSystemMetrics();
  }
}

function updateLiveSystemMetrics(currentDistance = null) {
  const liveMagMoment = document.getElementById("liveMagMoment");
  const liveFriction = document.getElementById("liveFriction");
  const liveMagForce = document.getElementById("liveMagForce");
  const liveNetForce = document.getElementById("liveNetForce");
  const liveAcceleration = document.getElementById("liveAcceleration");
  const liveSystemState = document.getElementById("liveSystemState");

  const {
    attachThreshold,
    detachThreshold,
    disturb,
    mass,
    mu,
    normal,
    current,
    turns,
    area
  } = microbotLiveConfig;

  const magneticMoment = turns * current * area;
  const frictionForce = mu * normal;

  let magneticForceEstimate = magneticMoment * 45;

  if (typeof currentDistance === "number") {
    const normalizedDistanceFactor = Math.max(0.08, 1 - currentDistance / (detachThreshold + 40));
    magneticForceEstimate *= normalizedDistanceFactor;
  }

  const netForce = magneticForceEstimate - frictionForce - disturb;
  const acceleration = mass > 0 ? netForce / mass : 0;

  let stateText = "In attesa";

  if (typeof currentDistance === "number") {
    if (currentDistance <= attachThreshold && netForce > 0) {
      stateText = "Aggancio favorito";
    } else if (currentDistance <= detachThreshold) {
      stateText = "Zona intermedia";
    } else {
      stateText = "Fuori soglia";
    }
  }

  if (liveMagMoment) liveMagMoment.textContent = magneticMoment.toFixed(4);
  if (liveFriction) liveFriction.textContent = frictionForce.toFixed(4);
  if (liveMagForce) liveMagForce.textContent = magneticForceEstimate.toFixed(4);
  if (liveNetForce) liveNetForce.textContent = netForce.toFixed(4);
  if (liveAcceleration) liveAcceleration.textContent = acceleration.toFixed(4);
  if (liveSystemState) liveSystemState.textContent = stateText;
}

function initDistanceSimulation() {
  const mathDistanceLine = document.getElementById("mathDistanceLine");
  const mathCompareLine = document.getElementById("mathCompareLine");
  const mathStateLine = document.getElementById("mathStateLine");
  const attachZone = document.getElementById("attachZone");
  const board = document.getElementById("simBoard");
  const botA = document.getElementById("botA");
  const botB = document.getElementById("botB");
  const link = document.getElementById("simLink");
  const coordA = document.getElementById("coordA");
  const coordB = document.getElementById("coordB");
  const distanceLive = document.getElementById("distanceLive");
  const attachState = document.getElementById("attachState");

  if (
    !board ||
    !botA ||
    !botB ||
    !link ||
    !attachZone ||
    !coordA ||
    !coordB ||
    !distanceLive ||
    !attachState ||
    !mathDistanceLine ||
    !mathCompareLine ||
    !mathStateLine
  ) {
    return;
  }

  let autoMotion = true;
  let draggingBot = null;

  const state = {
    a: { x: 140, y: 140 },
    b: { x: 320, y: 220 }
  };

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateVisuals() {
    const attachThreshold = microbotLiveConfig.attachThreshold;
    const detachThreshold = microbotLiveConfig.detachThreshold;

    const dx = state.b.x - state.a.x;
    const dy = state.b.y - state.a.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    botA.style.left = `${state.a.x}px`;
    botA.style.top = `${state.a.y}px`;

    botB.style.left = `${state.b.x}px`;
    botB.style.top = `${state.b.y}px`;

    link.style.left = `${state.a.x}px`;
    link.style.top = `${state.a.y}px`;
    link.style.width = `${d}px`;
    link.style.transform = `rotate(${angle}deg)`;

    attachZone.style.left = `${state.a.x}px`;
    attachZone.style.top = `${state.a.y}px`;
    attachZone.style.width = `${attachThreshold * 2}px`;
    attachZone.style.height = `${attachThreshold * 2}px`;

    coordA.textContent = `(${state.a.x.toFixed(2)}, ${state.a.y.toFixed(2)})`;
    coordB.textContent = `(${state.b.x.toFixed(2)}, ${state.b.y.toFixed(2)})`;
    distanceLive.textContent = d.toFixed(2);

    attachZone.classList.remove("active", "warning");
    attachState.classList.remove("attach-on", "attach-off");

    mathDistanceLine.classList.remove("active-true", "active-false", "active-warning");
    mathCompareLine.classList.remove("active-true", "active-false", "active-warning");
    mathStateLine.classList.remove("active-true", "active-false", "active-warning");

    mathDistanceLine.textContent = `d = ${d.toFixed(2)}`;

    if (d <= attachThreshold) {
      attachState.textContent = "Aggancio possibile";
      attachState.classList.add("attach-on");

      link.style.boxShadow = "0 0 18px rgba(100,240,210,0.45)";
      link.style.opacity = "1";

      attachZone.classList.add("active");

      mathCompareLine.textContent = `${d.toFixed(2)} ≤ ${attachThreshold.toFixed(2)}`;
      mathStateLine.textContent = "attach = true";

      mathDistanceLine.classList.add("active-true");
      mathCompareLine.classList.add("active-true");
      mathStateLine.classList.add("active-true");
    } else if (d <= detachThreshold) {
      attachState.textContent = "Vicino alla soglia";

      link.style.boxShadow = "0 0 14px rgba(255,211,110,0.25)";
      link.style.opacity = "0.88";

      attachZone.classList.add("warning");

      mathCompareLine.textContent = `${d.toFixed(2)} > ${attachThreshold.toFixed(2)} ma entro d_detach`;
      mathStateLine.textContent = "attach = pending";

      mathDistanceLine.classList.add("active-warning");
      mathCompareLine.classList.add("active-warning");
      mathStateLine.classList.add("active-warning");
    } else {
      attachState.textContent = "Fuori soglia";
      attachState.classList.add("attach-off");

      link.style.boxShadow = "0 0 10px rgba(135,168,255,0.18)";
      link.style.opacity = "0.72";

      mathCompareLine.textContent = `${d.toFixed(2)} > ${detachThreshold.toFixed(2)}`;
      mathStateLine.textContent = "attach = false";

      mathDistanceLine.classList.add("active-false");
      mathCompareLine.classList.add("active-false");
      mathStateLine.classList.add("active-false");
    }

    updateLiveSystemMetrics(d);
  }

  function animate() {
    if (autoMotion && !draggingBot) {
      const rect = board.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const t = performance.now() * 0.001;

      state.a.x = width * 0.35 + Math.cos(t * 0.9) * 80;
      state.a.y = height * 0.45 + Math.sin(t * 1.2) * 70;

      state.b.x = width * 0.65 + Math.cos(t * 1.4 + 1.4) * 95;
      state.b.y = height * 0.52 + Math.sin(t * 0.85 + 0.8) * 75;
    }

    updateVisuals();
    requestAnimationFrame(animate);
  }

  function startDrag(botKey, event) {
    draggingBot = botKey;
    autoMotion = false;
    board.classList.add("drag-mode");

    const botElement = botKey === "a" ? botA : botB;
    botElement.classList.add("dragging");
    event.preventDefault();
  }

  function stopDrag() {
    if (!draggingBot) return;

    botA.classList.remove("dragging");
    botB.classList.remove("dragging");
    board.classList.remove("drag-mode");
    draggingBot = null;
  }

  function handleMove(clientX, clientY) {
    if (!draggingBot) return;

    const rect = board.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 16, rect.width - 16);
    const y = clamp(clientY - rect.top, 16, rect.height - 16);

    state[draggingBot].x = x;
    state[draggingBot].y = y;
    updateVisuals();
  }

  botA.addEventListener("mousedown", (event) => startDrag("a", event));
  botB.addEventListener("mousedown", (event) => startDrag("b", event));

  window.addEventListener("mousemove", (event) => {
    handleMove(event.clientX, event.clientY);
  });

  window.addEventListener("mouseup", stopDrag);

  botA.addEventListener(
    "touchstart",
    (event) => {
      startDrag("a", event);
    },
    { passive: false }
  );

  botB.addEventListener(
    "touchstart",
    (event) => {
      startDrag("b", event);
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      if (!draggingBot) return;
      const touch = event.touches[0];
      if (!touch) return;
      handleMove(touch.clientX, touch.clientY);
    },
    { passive: false }
  );

  window.addEventListener("touchend", stopDrag);

  board.addEventListener("dblclick", () => {
    autoMotion = !autoMotion;
  });

  updateVisuals();
  animate();
}