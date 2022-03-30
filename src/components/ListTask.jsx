import { Paper, Text, Container, Button } from '@mantine/core'
import {useRef} from 'react'
import { X, Check } from 'tabler-icons-react';

export default function ListTask({ tasks, handleDeleteTask, handleFinishTask }) {  
    return (
        <Container className='flex flex-col my-4 gap-2'>
            {
                tasks.map(task => {
                    return <Paper className='flex justify-between'  key={task.id} shadow="sm" radius="md" p="lg">
                            <Text id={`id-${task.id}`}>
                                {task.nom}
                            </Text>
                            <div className='flex gap-1s'>
                                <Check className='text-emerald-400 cursor-pointer' onClick={() => handleFinishTask(task.id)} />
                                <X className='text-red-400 cursor-pointer' onClick={() => handleDeleteTask(task.id)}/>
                            </div>
                        </Paper>
                })
            }
        </Container>
    )
}
