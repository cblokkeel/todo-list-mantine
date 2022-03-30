import React from 'react'
import { TextInput, Container } from '@mantine/core';
import { CircleCheck, X } from 'tabler-icons-react';

export default function AddTask(props) {
  return (
    <Container >
        <TextInput
            icon={<CircleCheck />}
            placeholder="Nouvelle tâche"
            radius="md"
            size="md"
            variant="default"
            value={props.taskInput}
            onChange={props.handleTaskInputChange}
            onKeyUp={props.handleSubmit}
            rightSection={<X className='text-red-400 cursor-pointer' onClick={props.handleResetTaskInput}/>}
        />
    </Container>
  )
}
