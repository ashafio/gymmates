import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        {
            "name": "John Smith",
            "id": 1,
            "math": 85,
            "physics": 72,
            "chemistry": 91
        },
        {
            "name": "Mary Johnson",
            "id": 2,
            "math": 63,
            "physics": 94,
            "chemistry": 78
        },
        {
            "name": "Michael Brown",
            "id": 3,
            "math": 92,
            "physics": 57,
            "chemistry": 88
        },
        {
            "name": "Jennifer Lee",
            "id": 4,
            "math": 45,
            "physics": 82,
            "chemistry": 66
        },
        {
            "name": "David Davis",
            "id": 5,
            "math": 75,
            "physics": 68,
            "chemistry": 73
        },
        {
            "name": "Linda Wilson",
            "id": 6,
            "math": 89,
            "physics": 91,
            "chemistry": 52
        },
        {
            "name": "James Miller",
            "id": 7,
            "math": 72,
            "physics": 79,
            "chemistry": 60
        },
        {
            "name": "Patricia Anderson",
            "id": 8,
            "math": 56,
            "physics": 63,
            "chemistry": 85
        },
        {
            "name": "Richard Taylor",
            "id": 9,
            "math": 80,
            "physics": 88,
            "chemistry": 77
        },
        {
            "name": "Elizabeth Clark",
            "id": 10,
            "math": 71,
            "physics": 75,
            "chemistry": 69
        },
        {
            "name": "Robert Hernandez",
            "id": 11,
            "math": 68,
            "physics": 73,
            "chemistry": 90
        },
        {
            "name": "Susan Gonzalez",
            "id": 12,
            "math": 94,
            "physics": 64,
            "chemistry": 81
        }
    ]
    

    return (
        <div>
            <LineChart
            width={1350}
            height={300}
            data={marksArray}
            >

            {/* <Line dataKey={physics}></Line> */}
            <Line dataKey="physics" stroke='blue'></Line>
            <Line dataKey="chemistry" stroke='purple'></Line>
            <Line dataKey="math" stroke='cyan'></Line>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip />
            {/* <Legend /> */}
            </LineChart>
        </div>
    );
};

export default Dashboard;