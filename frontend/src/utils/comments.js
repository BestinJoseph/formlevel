export default {
    forms: [
        {
            _id: "some_id_goes_here_001",
            name: "One Form Job",
            uploads: "",
            status: 'pending',
            approvals: [
                {
                    incharge: "desiginated person",
                    department: 'Front Desk', 
                    lastUpdate: '',
                    status: 'pending',
                    approved: false,
                    comments : [
                        {role: "admin", updatedOn: '12 Jan, 2022', content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                        {role: "user", updatedOn: '13 Jan, 2022',  content: "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
                        {role: "admin", updatedOn: '30 Dec, 2022',  content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
                        {role: "user", updatedOn: '10 Jan, 2023',  content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                    ]
                },
                { incharge: "desiginated person", department: 'Finance', status: '', lastUpdate: '', approved: false, comments : [] },
                { incharge: "desiginated person", department: 'Human Resource', status: '', lastUpdate: '', approved: false, comments : [] },
                { incharge: "desiginated person", department: 'General Manager', status: '', lastUpdate: '', approved: false, comments : [] },
            ]
        },
        {
            _id: "some_id_goes_here_002",
            name: "Two Form Job",
            uploads: "",
            status: 'pending',
            approvals: [
                {
                    incharge: "desiginated person",
                    department: 'Front Desk', 
                    lastUpdate: '',
                    status: 'Approved',
                    approved: true,
                    comments : [
                        {role: "user", updatedOn: '13 Jan, 2022',  content: "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
                        {role: "admin", updatedOn: '30 Dec, 2022',  content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
                        {role: "user", updatedOn: '10 Jan, 2023',  content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                    ]
                },
                {
                    incharge: "desiginated person",
                    department: 'Finance', 
                    lastUpdate: '',
                    status: 'pending',
                    approved: false,
                    comments : [
                        {role: "admin", updatedOn: '12 Jan, 2022', content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                        {role: "user", updatedOn: '13 Jan, 2022',  content: "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
                    ]
                },
                { incharge: "desiginated person", department: 'Human Resource', status: '', lastUpdate: '', approved: false, comments : [] },
                { incharge: "desiginated person", department: 'General Manager', status: '', lastUpdate: '', approved: false, comments : [] },
            ]
        }
    ]
}