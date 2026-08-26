const projects = [
    {
        id: 1,
        title: "Write a novel",
        location: "Stockholm",
        tasks: [
            {
                id: 101,
                title: "Write the prelude",
                instructions: "Write a short prelude as the begining of the story. Make sure it contains the following parts: 1. A headline, 2. A captivating introduction sentence.",
                parts: [
                    {
                        id: 1,
                        instruction: "Write headline",
                    dependsOn: 0,
                        done: false
                    },
                    {
                        id: 2,
                        instruction: "Write opening sentence.",
                        dependsOn: 1,
                        done: false
                    },
                    {
                        id: 3,
                        instruction: "Write opening sentence.",
                        dependsOn: 2,
                        done: false
                    }
                ],
                status: false
            }
        ]
    },
    {
        id: 2,
        title: "Springcleaning.",
        location: "Stockholm",
        tasks: [
            {
                id: 201,
                title: "Clean the house",
                instructions: "It´s that time of the year and it´s time for spring cleaning! Make sure you do the following: 1. Clean the kitchen, 2. Clean the bathroom",
                parts: [
                    {
                        id: 1,
                        instruction: "Clean the kitchen.",
                        dependsOn: 0,
                        done: false
                    },
                    {
                        id: 2,
                        instruction: "Mop the hallway.",
                        dependsOn: 1,
                        done: false
                    },
                    {
                        id: 3,
                        instruction: "Put cleaning product in the toilet.",
                        dependsOn: 2,
                        done: false
                    }
                ],
                status: false
            }
        ]
    },
    {
        id: 3,
        title: "Order new cloths.",
        location: "Borås",
        tasks: [{
            id: 301,
            instruction: "Buy new clothes.",
            parts: [
                {
                    id: 1,
                    instruction: "Find store.",
                    dependsOn: 0,
                    done: false
                },
                {
                    id: 2,
                    instruction: "Find clothes.",
                    dependsOn: 1,
                    done: false
                },
                {
                    id: 3,
                    instruction: "Buy clothes.",
                    dependsOn: 2,
                    done: false
                }
            ],
            done: false
        }
        ]
    }
];

function showAllParts(projectsArray) {
    let mixedArray = [];

    for (let i = 0; i < projectsArray.length; i++) {
        for (let j = 0; j < projectsArray[i].tasks.length; j++) {
            for (let a = 0; a < projectsArray[i].tasks[j].parts.length; a++) {
                //mixedArray.push(projectsArray[i].tasks[j].parts[a]);

                mixedArray.push({
                    projectId: projectsArray[i].id,
                    projectTitle: projectsArray[i].title,

                    taskId: projectsArray[i].tasks[j].id,
                    taskTitle: projectsArray[i].tasks[j].title,

                    partId: projectsArray[i].tasks[j].parts[a].id,
                    instruction: projectsArray[i].tasks[j].parts[a].instruction,
                    done: projectsArray[i].tasks[j].parts[a].done
                });
            }
        }
    }

    return mixedArray;
}

const mixedArray = shuffleArray(showAllParts(projects));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] =
            [array[randomIndex], array[i]];
    }

    return array;
}