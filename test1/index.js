
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Reference Check",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Absent",
                    title: "Have you ever been absent from work for extended periods?",
                    choices: [
                        "No", "Yes", "Not more than 3 days"
                    ],
                    
                },
                {
                    type: "radiogroup",
                    name: "Documented",
                    title: "Have you ever documented(verbally or writing) at work? (for lateness, absenteeism)",
                    choicesOrder: "random",
                    choices: [
                        "No", "Yes"
                    ],
                    
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Jobs",
                    title: "Are there any jobs you have done in last 10 years that are not mentioned in the application?",
                    choicesOrder: "random",
                    choices: [
                        "No", "Yes"
                    ],
                    
                },
                {
                    type: "radiogroup",
                    name: "Resign",
                    title: "Have you resigned from a job in last 5 Years",
                    choicesOrder: "random",
                    choices: [
                        "Yes", "No"
                    ],
                    
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Fired",
                    title: "Have you ever fired from a job ?",
                    choicesOrder: "random",
                    choices: [
                        "No","Yes"
                    ],
                
                },
                {
                    type: "radiogroup",
                    name: "Education",
                    title: "Have you ever been suspended/expelled from an educational or training institution?",
                    choicesOrder: "random",
                    choices: [
                        "No", "Yes"
                    ],
                    
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Criminal",
                    title: "Have you ever been convicted of any criminal offence in any country for which the pardon has not been granted?",
                    choicesOrder: "random",
                    choices: [
                         "No","Yes"
                    ],
                    
                },
                {
                    type: "radiogroup",
                    name: "Worker",
                    title: "Have you ever been in a dispute with a co-worker?",
                    choicesOrder: "random",
                    choices: [
                        "Yes","No"
                    ],
                    
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Supervise",
                    title: "Have you ever supervised a team of more than 6 members?",
                    choicesOrder: "random",
                    choices: [
                        "Yes","No"
                    ],
                   
                },
                {
                    type: "radiogroup",
                    name: "Responsibility",
                    title: "Have you ever given a financial responsibility inside a company or an organization?",
                    choicesOrder: "random",
                    choices: [
                        "yes","No"
                    ],
                  
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });