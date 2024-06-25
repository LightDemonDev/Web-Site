let Record = {
    Bail: 0,
    Fines: 0,
    Months: 0,
    Articles: "",
    Options: {
        Bailble: true,
        Prymary: false,
        Colaboration: false
    }
}

const Infractions = {
    ["181"]: {
        Description: "Estacionar em local proibido",
        Months: 0,
        Fines: 1000,
        Bail: 0
    },
    ["102"]: {
        Description: "Fuga",
        Months: 15,
        Fines: 20000,
        Bail: 50000
    },
    ["108"]: {
        Description: "Direção Perigosa",
        Months: 0,
        Fines: 10000,
        Bail: 0
    },
    ["173"]: {
        Description: "Disputar rachas e corrigas ilegais",
        Months: 30,
        Fines: 30000,
        Bail: 70000
    },
    ["305"]: {
        Description: "Abandono de Veículo",
        Months: 0,
        Fines: 10000,
        Bail: 0
    },
    ["54"]: {
        Description: "Poluição Sonora",
        Months: 0,
        Fines: 15000,
        Bail: 0
    },
    ["308"]: {
        Description: "Corrida Ilegal",
        Months: 0,
        Fines: 15000,
        Bail: 0
    },
    ["65"]: {
        Description: "Conduzir Aeronave em baixa altitude",
        Months: 0,
        Fines: 30000,
        Bail: 0
    },
    ["02"]: {
        Description: "Ocultação Facial",
        Months: 0,
        Fines: 15000,
        Bail: 0
    },
    ["287"]: {
        Description: "Apologia ao Crime",
        Months: 25,
        Fines: 35000,
        Bail: 100000
    },
    ["342"]: {
        Description: "Falso testemunho",
        Months: 13,
        Fines: 7500,
        Bail: 13000
    },
    ["19"]: {
        Description: "Uso indevido de arma branca",
        Months: 0,
        Fines: 50000,
        Bail: 0
    },
    ["331"]: {
        Description: "Desacato",
        Months: 10,
        Fines: 15000,
        Bail: 60000
    },
    ["330"]: {
        Description: "Desobediência",
        Months: 15,
        Fines: 35000,
        Bail: 100000
    },
    ["171"]: {
        Description: "Estelionato",
        Months: 18,
        Fines: 13000,
        Bail: 0
    },
    ["158"]: {
        Description: "Extorsão",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["299"]: {
        Description: "Falsidade ideológica",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["298"]: {
        Description: "Falsificação de documentos",
        Months: 18,
        Fines: 10000,
        Bail: 0
    },
    ["150"]: {
        Description: "Invasão",
        Months: 25,
        Fines: 20000,
        Bail: 80000
    },
    ["520"]: {
        Description: "Multas pendentes",
        Months: 10,
        Fines: 9000,
        Bail: 17000
    },

    ["129"]: {
        Description: "Lesão Corporal",
        Months: 10,
        Fines: 0,
        Bail: 0
    },
    ["135"]: {
        Description: "Omissão de Socorro",
        Months: 0,
        Fines: 30000,
        Bail: 0
    },
    ["139"]: {
        Description: "Calunia, Difamação e Injúria",
        Months: 0,
        Fines: 25000,
        Bail: 0
    },
    ["147"]: {
        Description: "Ameaça",
        Months: 14,
        Fines: 50000,
        Bail: 0
    },
    ["288"]: {
        Description: "Associação criminosa",
        Months: 15,
        Fines: 20000,
        Bail: 60000
    },
    ["358"]: {
        Description: "Obstrução de justiça",
        Months: 10,
        Fines: 50000,
        Bail: 0
    },
    ["334"]: {
        Description: "Contrabando",
        Months: 25,
        Fines: 60000,
        Bail: 0
    },
    ["334§3"]: {
        Description: "Descaminho",
        Months: 15,
        Fines: 28000,
        Bail: 45000
    },
    ["56"]: {
        Description: "Danos a Terceiros / Patrimônio",
        Months: 0,
        Fines: 27500,
        Bail: 0
    },
    ["157"]: {
        Description: "Roubo",
        Months: 15,
        Fines: 25000,
        Bail: 0
    },
    ["157§2"]: {
        Description: "Roubo a caixa eletrônico / registradora",
        Months: 20,
        Fines: 25000,
        Bail: 0
    },
    ["157§3"]: {
        Description: "Roubo a residência",
        Months: 22,
        Fines: 28000,
        Bail: 0
    },
    ["180"]: {
        Description: "Receptação",
        Months: 18,
        Fines: 15000,
        Bail: 45000
    },
    ["351"]: {
        Description: "Fuga da prisão | Ajudar fugitivo da prisão",
        Months: 40,
        Fines: 60000,
        Bail: 0
    },
    ["57"]: {
        Description: "Posse ilegal de munições",
        Months: 15,
        Fines: 20000,
        Bail: 50000
    },
    ["06"]: {
        Description: "Abuso de autoridade",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["33"]: {
        Description: "Tráfico de Drogas",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["289"]: {
        Description: "Posse de dinheiro sujo",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["155"]: {
        Description: "Furto",
        Months: 15,
        Fines: 20000,
        Bail: 80000
    },
    ["333"]: {
        Description: "Tentativa de suborno",
        Months: 30,
        Fines: 20000,
        Bail: 60000
    },
    ["121§3"]: {
        Description: "Homicidio Culposo",
        Months: 15,
        Fines: 40000,
        Bail: 100000
    },
    ["121§1"]: {
        Description: "Homicidio Doloso",
        Months: 50,
        Fines: 50000,
        Bail: 0
    },
    ["129§1"]: {
        Description: "Tentativa de Homicidio",
        Months: 40,
        Fines: 40000,
        Bail: 0
    },
    ["148"]: {
        Description: "Sequestro",
        Months: 25,
        Fines: 45000,
        Bail: 0
    },
    ["148§1"]: {
        Description: "Extorsão mediante a sequestro",
        Months: 0,
        Fines: 0,
        Bail: 0
    },
    ["157§5"]: {
        Description: "Latrocínio",
        Months: 55,
        Fines: 50000,
        Bail: 0
    },
    ["61"]: {
        Description: "Vazamento de informações confidenciais",
        Months: 7,
        Fines: 35000,
        Bail: 0
    },
    ["18"]: {
        Description: "Tráfico de Armas",
        Months: 40,
        Fines: 65000,
        Bail: 0
    },
    ["59§1"]: {
        Description: "Ação de Nível 01",
        Months: 25,
        Fines: 30000,
        Bail: 55000
    },
    ["59§2"]: {
        Description: "Ação de Nível 02",
        Months: 40,
        Fines: 65000,
        Bail: 0
    },
    ["59§3"]: {
        Description: "Ação de Nível 03",
        Months: 60,
        Fines: 80000,
        Bail: 0
    },
    ["14"]: {
        Description: "Mal uso de arma de fogo COM PORTE",
        Months: 0,
        Fines: 50000,
        Bail: 0
    },
    ["18§1"]: {
        Description: "Posse de arma exclusiva da polícia",
        Months: 10,
        Fines: 55000,
        Bail: 0
    },
    ["15"]: {
        Description: "Posse ilegal de armas classe 01 (Pistola)",
        Months: 15,
        Fines: 30000,
        Bail: 50000
    },
    ["16"]: {
        Description: "Posse ilegal de armas classe 02 (SMG)",
        Months: 25,
        Fines: 40000,
        Bail: 0
    },
    ["17"]: {
        Description: "Posse ilegal de armas classe 03 (Fuzil)",
        Months: 35,
        Fines: 55000,
        Bail: 0
    },
    ["92§1"]: {
        Description: "Simulacro de arma de fogo ou colete balístico",
        Months: 0,
        Fines: 10000,
        Bail: 0
    },
}

$(document).ready(() => {
    $('#Fines').html(`0`);
    $('#Bail').html(`0`);
    $('#Articles').html(` `);
    $('#Months').html(`0`);
});

$(document).on('click', '.List01, .List02, .List03, .List04, .List05, .List06', function () {
    const Id = $(this).attr('id');
    let Bail = "Não";

    if (!Infractions[Id]) {
        return alert("Esse crime não foi configurado.");
    }

    if (Record.Articles.split(", ").includes(Id)) {
        return alert("Este crime já foi adicionado.");
    }

    if (Infractions[Id].Months > 0 && Infractions[Id].Bail <= 0 && Record.Options.Bailble) {
        Record.Bail = "Não";
        Record.Options.Bailble = false;
        alert("O crime adicionado não é afiançável e o detento perdeu seu direito à fiança.");
    }

    Record.Articles += `${Id}, `;
    Record.Months += Infractions[Id].Months;
    Record.Fines += Infractions[Id].Fines;

    if (typeof (Record.Bail) === "number" && Record.Options.Bailble) {
        Record.Bail += Infractions[Id].Bail;
        Bail = Record.Bail.toFixed(3);
    }

    $('#Fines').html(`${Record.Fines.toFixed(3)}`);
    $('#Bail').html(`${Bail}`);
    $('#Articles').html(`${Record.Articles.replace(/,([^,]*)$/, '.$1')}`);
    $('#Months').html(`${Record.Months}`);
});

function Clean() {
    $('#Fines').html(`0`);
    $('#Months').html(`0`);
    $('#Bail').html(`0`);
    $('#Articles').html(` `);

    Record = {
        Bail: 0,
        Fines: 0,
        Months: 0,
        Articles: "",
        Options: {
            Prymary: false,
            Colaboration: false
        }
    }
}

function Prymary() {
    let Fines = Record.Fines;
    let Months = Record.Months;

    if (Record.Options.Prymary !== false) {
        return alert("Essa opção já foi selecionada.");
    }

    Fines = Fines - ((Fines * 25) / 100);
    Months = Months - ((Months * 25) / 100);

    Record.Fines = Fines;
    Record.Months = Months;
    Record.Options.Prymary = true;
    $('#Fines').html(`${Fines.toFixed(3)}`);
    $('#Months').html(`${Months.toFixed(0)}`);
}

function Colaboration() {
    let Fines = Record.Fines;
    let Months = Record.Months;

    if (Record.Options.Colaboration !== false) {
        return alert("Essa opção já foi selecionada.");
    }

    Fines = Fines - ((Fines * 20) / 100);
    Months = Months - ((Months * 20) / 100);

    Record.Fines = Fines;
    Record.Months = Months;
    Record.Options.Colaboration = true;
    $('#Fines').html(`${Fines.toFixed(3)}`);
    $('#Months').html(`${Months.toFixed(0)}`);
}

function Finish() {
    const Name = $('#name').val();
    const Passport = $('#passport').val();
    const Articles = Record.Articles;
    let Fines = Record.Fines;
    let Months = Record.Months;
    let Bail = "Não";

    if ((!Name || !Passport) || (Bail < 1 && Fines < 1 && Months < 1)) return alert("Você não completou todos os campos.");

    console.log(Fines)
    if (Months > 60) Months = `60 (${Months})`;
    if (Record.Bail > 0) Bail = `R$ ${Record.Bail}`;
    if (Fines > 300000) Fines = `300000 (${Fines})`;

    const Div = document.createElement('div');
    const Label = document.createElement('label');
    const CopyButton = document.createElement('button');
    const BackButton = document.createElement('button');

    Div.classList.add('Finished');
    CopyButton.classList.add('Copy');
    BackButton.classList.add('Back');

    CopyButton.innerHTML = `Copiar`;
    BackButton.innerHTML = `Voltar`;
    Label.innerHTML = `Nome: ${Name} <br>Passaporte: ${Passport} <br>Artigos: ${Articles.replace(/,([^,]*)$/, '.$1')} <br>Pena: ${Months} Meses <br>Multa: R$ ${Fines} <br>Fiança: ${Bail}`;

    document.body.appendChild(Div);

    let ClipArticles = "";

    Articles.split(", ").forEach((Crime, Index) => {
        if (Infractions[Crime]) {
            ClipArticles += `${Crime} - ${Infractions[Crime]["Description"]}, `;
        }
    });

    let Clip = `Nome: ${Name}; \nPassaporte: ${Passport}; \nArtigos: ${ClipArticles.replace(/,([^,]*)$/, ';$1')} \nPena: ${Months} Meses; \nMulta: R$ ${Fines}; \nFiança: ${Bail}; \nPreso Por: \nPoliciais Envolvidos: `;

    Div.appendChild(Label);
    Div.appendChild(CopyButton);
    Div.appendChild(BackButton);

    $(BackButton).on('click', () => {
        window.location.href = "./calculator.html";
    });

    $(CopyButton).on('click', () => {
        navigator.clipboard.writeText(Clip).then(() => {
            alert(`Ficha copiada para a área de transferência.`);
        })
    });
}
