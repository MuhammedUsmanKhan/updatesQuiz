let container = document.querySelector(`#container`)
let MCQ = [
    {
        Question: "Who made this Car",
        A: "Usman",
        B: "Umer",
        C: "Ushna",
        D: "Isha",
        Answer: "Usman",
    },
    {
        Question: "Who made this Car",
        A: "Uvdsman",
        B: "Umefdgdfr",
        C: "Ushnfgda",
        D: "Ishagf",
        Answer: "Usman",
    },
]
let x = 0
//makingdivs
const rows = () => {
    let lengthObj = Object.keys(MCQ[x]).length
    let keys = Object.keys(MCQ[x])
    for (let i = 0; i < lengthObj - 1; i++) {

        if (lengthObj != 0) {
            let newELEMENT = document.createElement(`div`)
            container.append(newELEMENT)
            if (i == 0) {
                let QuesSpan = document.createElement(`span`)
                let txt = document.createTextNode(`${MCQ[0].Question}`)
                QuesSpan.appendChild(txt)
                QuesSpan.setAttribute(`id`,`ques`)
                newELEMENT.appendChild(QuesSpan)
            }
            else {
                let Label = document.createElement(`label`)
                let txt = document.createTextNode(`${MCQ[0][`${keys[i]}`]}`)
                Label.appendChild(txt)
                Label.setAttribute(`id`,`Ans`)
                Label.setAttribute(`for`,`inp${i}`)
                let inp = document.createElement(`input`)
                inp.setAttribute(`type`,`radio`)
                inp.setAttribute(`id`,`inp${i}`)
                inp.setAttribute(`name`,`options`)
                inp.setAttribute(`value`,`${keys[i]}`)
                newELEMENT.appendChild(inp)
                newELEMENT.appendChild(Label)

            }
        }
        else {
            break;
        }
    }
    x = x + 1;
}
console.log(Object.keys(MCQ[x]).length)
rows()
