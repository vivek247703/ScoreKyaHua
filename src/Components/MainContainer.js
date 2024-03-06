import React from 'react'
import { LiveMatches } from './LiveMatches'
import { UpcomingMatches } from './UpcomingMatches'
import { Outlet } from 'react-router-dom'

export const MainContainer=()=> {
  return (
    <div>
      <LiveMatches/>
      <UpcomingMatches/>
    </div>
  )
}
