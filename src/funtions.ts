import {response as Res} from './components/Question'
const calculateScore = (res: Res[]) => {
return res.reduce((acc, r) => r.answer.score + acc, 0);
}

function getAddvice(mark: number, total: number) {
    let advice = {
        title: "",
        message: "",
        general: "",
        lowerLimit: 0,
        upperLimit: 0.25,
        special:"",
        footer: `This online oral OHQ scorer is designed for the convenience of at home oral health risk assessment.
        So, visit us again and take this free test after a month to follow up your progress.
        `
    }
    const score = mark / total
    if (score <= 0.25) {
        advice.title =  "Low risk";
        advice.message = `Brush your teeth twice a day with fluoride toothpaste.
        Floss daily to remove food particles and plaque from between teeth.
        Schedule regular dental check-ups every six months.
        Limit sugary and acidic foods and drinks.
        Consider using mouthwash to help freshen breath and kill bacteria.
        `;
        advice.lowerLimit = 0;
        advice.special = `Congratulations you have well maintained your oral hygiene and overall oral health. 
        We will still recommend the healthy practice of the visiting your dentist once every six months and undergoing routine of oral checkup
        `;
    }
    else if(score < 0.50) {
        advice.title =  "Moderate risk";
        advice.message = `Follow a strict oral hygiene routine that includes brushing twice a day with fluoride toothpaste and flossing daily.
        Schedule regular dental check-ups every six months.
        Limit sugary and acidic foods and drinks.
        Consider using mouthwash to help freshen breath and kill bacteria.
        Use fluoride toothpaste to help prevent tooth decay and gum disease.        
        `;
        advice.lowerLimit = 0.25;
        advice.upperLimit = 0.50;
        
        advice.special = `Do not worry, your personalized score is at lower end of the risk category range, with guidance, from your dentist and following daily healthy oral hygiene routine can improve your overall oral health quotient.`;
    }
    else if (score <= 0.75) {
        advice.title =  "High risk";
        advice.message = `Follow a strict oral hygiene routine that includes brushing twice a day with fluoride toothpaste and flossing daily.
        Schedule regular dental check-ups every three to four months.
        Limit sugary and acidic foods and drinks.
        Consider using mouthwash to help freshen breath and kill bacteria.
        Use fluoride toothpaste and mouthwash to help prevent tooth decay and gum disease.
        Consider additional interventions, such as dental sealants or fluoride treatments, to prevent or manage oral health conditions.                
        `;
        advice.lowerLimit = 0.5;
        advice.upperLimit = 0.75;
        advice.special = `According to your personalized oral health quotient score, you need immediate clinical attention. Do not panic, please reach out to your dentist and follow the instructions below. Your overall oral hygiene will improve.`;
    }
    else {
        advice.title =  "Very high risk";
        advice.message = `Follow a strict oral hygiene routine that includes brushing twice a day with fluoride toothpaste and flossing daily.
        Schedule regular dental check-ups every three months or as recommended by your dentist.
        Limit sugary and acidic foods and drinks.
        Consider using mouthwash to help freshen breath and kill bacteria.
        Use fluoride toothpaste and mouthwash to help prevent tooth decay and gum disease.
        Make lifestyle changes, such as improving your diet and quitting smoking if you smoke.
        Consider additional interventions, such as more frequent dental cleanings or periodontal treatments, to prevent or manage oral health conditions.    
        `; 
        advice.lowerLimit = 0.75;
        advice.upperLimit = 1;
        advice.special = `According to your personalized oral health quotient score, your oral needs immediate clinical attention. Do not panic, please reach out to your dentist and follow strict oral hygiene regimen. Your overall oral hygiene will improve.`;
    }
    advice.general = `Your personalized oral health quotient score is ${Math.round((mark/total) * 100)}, according to ADA standardization you fall under the category of ${advice.title} with score ranging from ${advice.lowerLimit*100} to ${advice.upperLimit*100}`;
    return advice;
}

export {calculateScore, getAddvice};