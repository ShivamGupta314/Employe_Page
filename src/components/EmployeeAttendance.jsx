// import React from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
// import { Badge } from "./ui/badge"
// import { CalendarDays, UserCircle } from "lucide-react"

// // Mock data for the example
// const employeeData = {
//   name: "Jane Smith",
//   id: "EMP002",
//   department: "Marketing",
// }

// const attendanceSummary = {
//   present: 20,
//   absent: 2,
//   late: 1,
//   totalWorkingDays: 23,
// }

// const attendanceRecords = [
//   { date: "2023-05-01", status: "Present", checkIn: "09:00 AM", checkOut: "05:30 PM" },
//   { date: "2023-05-02", status: "Present", checkIn: "08:55 AM", checkOut: "05:25 PM" },
//   { date: "2023-05-03", status: "Late", checkIn: "10:15 AM", checkOut: "06:45 PM" },
//   { date: "2023-05-04", status: "Absent", checkIn: "-", checkOut: "-" },
//   { date: "2023-05-05", status: "Present", checkIn: "09:05 AM", checkOut: "05:35 PM" },
// ]

// export function EmployeeAttendance() {
//   return (
//     <div className="container mx-auto p-4 space-y-6">
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-2xl font-bold">Employee Attendance</CardTitle>
//           <UserCircle className="h-8 w-8 text-gray-400" />
//         </CardHeader>
//         <CardContent>
//           <div className="flex flex-col space-y-1">
//             <p className="text-xl font-semibold">{employeeData.name}</p>
//             <p className="text-sm text-muted-foreground">ID: {employeeData.id}</p>
//             <p className="text-sm text-muted-foreground">Department: {employeeData.department}</p>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Working Days</CardTitle>
//             <CalendarDays className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{attendanceSummary.totalWorkingDays}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Present</CardTitle>
//             <CalendarDays className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{attendanceSummary.present}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Absent</CardTitle>
//             <CalendarDays className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{attendanceSummary.absent}</div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Late</CardTitle>
//             <CalendarDays className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{attendanceSummary.late}</div>
//           </CardContent>
//         </Card>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Attendance Records</CardTitle>
//           <CardDescription>Detailed view of your recent attendance</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Check In</TableHead>
//                 <TableHead>Check Out</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {attendanceRecords.map((record, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{record.date}</TableCell>
//                   <TableCell>
//                     <Badge
//                       variant={
//                         record.status === "Present"
//                           ? "default"
//                           : record.status === "Late"
//                           ? "warning"
//                           : "destructive"
//                       }
//                     >
//                       {record.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell>{record.checkIn}</TableCell>
//                   <TableCell>{record.checkOut}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { CalendarDays, UserCircle } from "lucide-react"

// Mock data for the example
const employeeData = {
  name: "Jane Smith",
  id: "EMP002",
  department: "Marketing",
}

const attendanceSummary = {
  present: 20,
  absent: 2,
  late: 1,
  totalWorkingDays: 23,
}

const attendanceRecords = [
  { date: "2023-05-01", status: "Present", checkIn: "09:00 AM", checkOut: "05:30 PM" },
  { date: "2023-05-02", status: "Present", checkIn: "08:55 AM", checkOut: "05:25 PM" },
  { date: "2023-05-03", status: "Late", checkIn: "10:15 AM", checkOut: "06:45 PM" },
  { date: "2023-05-04", status: "Absent", checkIn: "-", checkOut: "-" },
  { date: "2023-05-05", status: "Present", checkIn: "09:05 AM", checkOut: "05:35 PM" },
]

// Suppress the specific warning about defaultProps for the XAxis component
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('Warning: XAxis: Support for defaultProps will be removed')) {
    return;
  }
  originalConsoleError(...args);
};

export function EmployeeAttendance() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Employee Attendance</CardTitle>
          <UserCircle className="h-8 w-8 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-1">
            <p className="text-xl font-semibold">{employeeData.name}</p>
            <p className="text-sm text-muted-foreground">ID: {employeeData.id}</p>
            <p className="text-sm text-muted-foreground">Department: {employeeData.department}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Working Days</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.totalWorkingDays}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.present}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.absent}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.late}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Records</CardTitle>
          <CardDescription>Detailed view of your recent attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        record.status === "Present"
                          ? "default"
                          : record.status === "Late"
                          ? "warning"
                          : "destructive"
                      }
                    >
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
