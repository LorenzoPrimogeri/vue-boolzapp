const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '15:51',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Tutto fatto!',
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
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Mi piacebnbbrebbe ma devo andare a fare la spesa.',
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
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Ah scusa!',
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
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Si, ma preferirei andare al cinema',
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
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Va bene, stasera la sento',
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
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Nessuna nuova notizia, buona giornata',
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
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
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
                status: 'received'
            },
            {
                date: '15:51',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'OK!!',
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
                if (this.contacts[i].name.includes(this.userName)) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
                console.log(this.contacts[i].visible);
            }
            this.userName = '';
        },
        infOrDelete(message, index) {
            // elimina i messaggi
            element = document.querySelector("#Open");
            element.classList.toggle("visible");
            console.log(element);
            // this.contacts[index].messages[index].remove(message);
        },
        bgColor(element) {
            // assegna il bg all'icona in base al messaggio
            if (element == "received") {
                return "bg-white"
            } else {
                return "sent-message"
            }
        }
    }
});
