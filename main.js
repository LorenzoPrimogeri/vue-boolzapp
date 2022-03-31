const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Hai portato a spasso il cane?',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Ricordati di stendere i panni',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Tutto fatto!',
                tooltip: false,
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Ciao come stai?',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Bene grazie! Stasera ci vediamo?',
                tooltip: false,
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Mi piacebnbbrebbe ma devo andare a fare la spesa.',
                tooltip: false,
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'La Marianna va in campagna',
                tooltip: false,
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Sicuro di non aver sbagliato chat?',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Ah scusa!',
                tooltip: false,
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Si, ma preferirei andare al cinema',
                tooltip: false,
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Ricordati di chiamare la nonna',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Va bene, stasera la sento',
                tooltip: false,
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Ciao Claudia, hai novità?',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Non ancora',
                tooltip: false,
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Nessuna nuova notizia, buona giornata',
                tooltip: false,
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                tooltip: false,
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                tooltip: false,
                status: 'received'
            },
            {
                date: '15:51',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                tooltip: false,
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'OK!!',
                tooltip: false,
                status: 'received'
            }
        ],
    },
]
const app = new Vue({
    el: "#app",
    data: {
        contacts,
        index: 0,
        messaggio: "",
        userName: "",
        currentTime: new Date(),
        toolTipOpenNumber: 0,
    },
    methods: {
        takeindex(contactIndex) {
            //al click cambia la chat
            this.index = contactIndex;
        },
        sentOReceived(status) {
            //assegna un allineamento in base allo status    
            if (status == "received") {
                return "justify-content-start"
            } else {
                return "justify-content-end";
            }
        },
        sentOReceivedColor(status) {
            //assegnazione bg in base allo status del messaggio
            if (status == "received") {
                return "bg-white"
            } else {
                return "sent-message";
            }
        },
        messaggioRisposta(hr, mn) {
            //risposta al messaggio mandato da noi
            let newMessaggio = {
                date: hr + ":" + mn,
                message: "ok",
                status: 'received'
            }
            this.contacts[this.index].messages.push(newMessaggio);
        },
        mandaMessaggio() {
            let hr = this.currentTime.getHours();
            let mn = this.currentTime.getMinutes();
            if (mn < 10) {
                mn = "0" + mn;
            }
            if (hr < 10) {
                hr = "0" + hr;
            }
            console.log();
            let newMessaggio = {
                date: hr + ":" + mn,
                message: this.messaggio.trim(),
                status: 'sent'
            }
            this.contacts[this.index].messages.push(newMessaggio);
            this.messaggio = '';
            const time = setTimeout(this.messaggioRisposta, 1000, hr, mn)
        },
        ricercaUtente() {
            //ricerca un utente nella barra di ricerca a sinistra
            for (let i = 0; i < this.contacts.length; i++) {
                let nomi = this.contacts[i].name.toLowerCase();
                if (nomi.includes(this.userName)) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
                console.log(this.contacts[i].visible);
            }
        },
        visualizzaInfoMess(message) {
            message.tooltip = !message.tooltip;
        },
        infOrDelete(messageIndex) {
            this.contacts[this.index].messages.splice(messageIndex, 1);
            console.log(this.contacts[this.index].messages);
        },
    }
});
