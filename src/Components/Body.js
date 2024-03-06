import React from 'react'
import { LiveMatches } from './LiveMatches'
import { UpcomingMatches } from './UpcomingMatches'
import { Outlet } from 'react-router-dom'
import { MainContainer } from './MainContainer'

export const Body=()=> {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
