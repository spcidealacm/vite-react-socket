import { useState, useEffect } from 'react'
import { io, Socket } from "socket.io-client"

type AppType = {
  address: string
}

type StatusType = {
  status: boolean
  socket: Socket | undefined
}

function Status({ status, socket }: StatusType) {
  return status ? <>Socket id: {socket?.id}</> : <></>
}

function App({ address }: AppType) {
  const [socket, setSocket] = useState<Socket>()
  const [status, setStatus] = useState(false)
  useEffect(()=>{
    socket?.disconnect()
    setSocket(io(address))
    setStatus(false)
  },[address])
  useEffect(() => {
    socket?.on('connect', () => {
      setStatus(status => true)
    })
    socket?.on('disconnect', ()=>{
      setStatus(status => false)
    })
  }, [socket])
  return (
    <>
      <div>HELLO, {address}</div>
      <div>Socket connect status: {status ? 'true' : 'false'}</div>
      <Status status={status} socket={socket} />
    </>
  )
}

export default App
