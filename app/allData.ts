import {v4 as uuidv4} from "uuid"
export interface Component{
    _id:string;
    name:string;
    projectName:string;
    code:string;
    isFavorite:boolean;
    createdAt:string;

}
export interface Project{
    _id:string;
    clerkUserId:string;
    name:string;
    icon:string;
    createdAt:string;
    components:Component[];

}

export const allProjectData:Project[]=[
    {
        _id:uuidv4(),
        clerkUserId:"",
        name:"Forms",
        icon:"CategoryIcon",
        createdAt:"2024-01-01T00:00:00.000Z",
        components:[
          {
            _id:uuidv4(),
            name:"Form 1",
            projectName:"Forms",
            code:`  <div className="p-4 bg-blue-100 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700">Hello,Tailwind!</h1>
        <p className="mt-2 text-gray-600">Edit this code to see live changes.</p>
        </div>`,
            isFavorite:false,
            createdAt:"2024-01-01T00:00:00.000Z"
          },
          {
            _id:uuidv4(),
            name:"Form 2",
            projectName:"Forms",
            code:`  <div className="p-4 bg-blue-100 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700">Hello,Tailwind!</h1>
        <p className="mt-2 text-gray-600">Edit this code to see live changes.</p>
        </div>`,
            isFavorite:false,
            createdAt:"2024-02-01T00:00:00.000Z" 
          },
          {
            _id:uuidv4(),
            name:"Form 3",
            projectName:"Forms",
            code:`  <div className="p-4 bg-blue-100 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700">Hello,Tailwind!</h1>
        <p className="mt-2 text-gray-600">Edit this code to see live changes.</p>
        </div>`,
            isFavorite:false,
            createdAt:"2024-03-01T00:00:00.000Z"
          },
        ],
    },
    
    {
        _id:uuidv4(),
        clerkUserId:"",
        name:"Buttons",
        icon:"RectangleIcon",
        createdAt:"2024-01-01T00:00:00.000Z",
        components:[
            {
              _id:uuidv4(),
              name:"Button 1",
              projectName:"Buttons",
              code:`  <div className="p-4 bg-blue-100 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-700">Hello,Tailwind!</h1>
        <p className="mt-2 text-gray-600">Edit this code to see live changes.</p>
        </div>`,
              isFavorite:false,
              createdAt:"2024-01-01T00:00:00.000Z",
            }
        ]
    }
]