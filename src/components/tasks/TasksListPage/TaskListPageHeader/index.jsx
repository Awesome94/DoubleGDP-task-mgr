import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as DarkModeIcon } from '../../../../icons/darkmodeiconIcon.svg'
import { ReactComponent as PlusIcon } from '../../../../icons/plusIcon.svg'
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from '../../../../context/ThemeContext'

const PageHeader = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    display: flex;
    width: 90%;
  }
`

const Title = styled.h1`
  width: 50%;
  display: flex;
  font-size: 40px;
  color: grey;

  @media only screen and (max-width: 768px) {
    color: grey;
    font-size: 30px;
    display: flex;
  }
`

const HeaderIcon = styled.div`
  display: flex;
  width: 25%;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`

const TaskListPageHeader = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <PageHeader>
      <Title>Tasks</Title>
      <HeaderIcon>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <DarkModeIcon
              width="38px"
              onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.dark : themes.light)
              }}
            />
          )}
        </ThemeContext.Consumer>
      </HeaderIcon>
      <HeaderIcon>
        <Link to="/add">
          <PlusIcon width="28px" />
        </Link>
      </HeaderIcon>
    </PageHeader>
  )
}

export default TaskListPageHeader
