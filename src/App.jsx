import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { DashboardContent } from './components/DashboardContent'
import { ProjectView } from './components/ProjectView'
import { TaskView } from './components/TaskView'
import { TeamView } from './components/TeamView'
import { AnalyticsView } from './components/AnalyticsView'
import { Navbar } from './components/Navbar'
import { EmployeeAttendance } from './components/EmployeeAttendance'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/projects" element={<ProjectView />} />
              <Route path="/tasks" element={<TaskView />} />
              <Route path="/team" element={<TeamView />} />
              <Route path="/analytics" element={<AnalyticsView />} />
              <Route path="/attendance" element={<EmployeeAttendance/>} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App