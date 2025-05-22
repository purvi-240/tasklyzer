import axios from 'axios';

export const getTodos = async() => {
    let config = {
        method: 'get',
        url: 'http://localhost:4000/todos',
        headers: { }
    };

    const response = await axios(config);

    return response.data;    
}

export const addTodo = async(title: string, description: string, due_date: Date) => {
    const data = {
            title, description, due_date
        }
    let config = {
        method: 'post',
        url: 'http://localhost:4000/todos',
        headers: {
            "Content-type": "application/json"
        },
        data: data 
    };
    
    const response = await axios(config);
     
    return response.data;
}

export const deleteTodo = async(id: string) => {
    let config = {
        method: 'delete',
        url: `http://localhost:4000/todos/${id}`,
        header:{}
    }

    const response = await axios(config);

    return response.data;
}