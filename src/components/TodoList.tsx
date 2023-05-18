'use client'

import { CSSProperties } from 'react'
import { FixedSizeList as List } from 'react-window'
import StyledRow from './Styled/StyledRow'
import { Todo } from '../../types/todo'
import { Typography } from '@mui/material'
import StyledStatus from './Styled/StylesStatus'

const Row = ({
    index,
    style,
    data,
}: {
    index: number
    style: CSSProperties
    data: Todo[]
}) => (
    <StyledRow even={index % 2 === 0} style={style}>
        <Typography variant="h6">Title: {data[index].title}</Typography>
        <StyledStatus
            status={data[index].completed ? 'completed' : 'in-progress'}
        >
            {data[index].completed ? 'Completed' : 'In-Progress'}
        </StyledStatus>
    </StyledRow>
)

interface Props {
    todos: Todo[]
}

const TodoList = ({ todos }: Props) => (
    <List
        height={500}
        itemCount={todos.length}
        itemSize={100}
        width={'100%'}
        itemData={todos}
    >
        {Row}
    </List>
)

export default TodoList
