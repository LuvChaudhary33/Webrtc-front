import {createContext, useState, useRef, useEffect, useContext, useMemo} from "react"
import {io} from "socket.io-client";
// import peer from "./Peer"

const SocketContext = createContext()
// const socket = io("http://localhost:3000")

export const useSocket = () =>{
    const socket = useContext(SocketContext)
    return socket;
}
export const SocketProvider = (props) => {

    // const [stream, setStream] = useState(null)
    // const [remoteStream, setRemoteStream] = useState(null)
    // const [call, setCall] = useState(null)
    // const [me, setMe] = useState('')
    // const [name, setName] = useState('')
    // const [callAccepted, setCallAccepted] = useState(false)
    // const [callEnded, setCallEnded] = useState(false)

    // const myVideo = useRef()
    // const userVideo = useRef()
    // const connectionRef = useRef()

    // useEffect(() => {
    //     peer.peer.addEventListener('track', async ev => {
    //         const remoteStream = ev.streams
    //         setRemoteStream(remoteStream)
    //         userVideo.current.srcObject = remoteStream;
    //     })
    // }, [])

    // useEffect(() => {
    //     if (myVideo.current) {
    //       myVideo.current.srcObject = stream;
    //     }
    //   }, [myVideo, stream]);

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({video: true, audio: true})
    //     .then((currentStream) => {
    //         setStream(currentStream)
    //         if(stream){
    //           myVideo.current.srcObject = stream
    //         }
    //     })

    //     socket.on('me', (id) => setMe(id))
    //     socket.on("calluser", ({from, name: callerName, offer}) =>{
    //         setCall({isReceivedCall: true, from, name: callerName, offer})
    //     })

    // }, [])

    // const answerCall = async() =>{
    //     setCallAccepted(true)
    //     const ans = await peer.getAnswer()
    //     // const peer = new Peer({initiator: false, trickle: false, stream})

    //     // peer.on('signal',(data) => {
    //         socket.emit('answercall', {ans, to: call.from})
    //     // })
    //     for(const track of stream.getTracks()){
    //         peer.peer.addTrack(track, stream);
    //     }

    //     // peer.on("stream", (currentStream) => {
    //         // userVideo.current.srcObject = currentStream;
    //     // })

    //     // peer.signal(call.signal)
    //     // connectionRef.current = peer;
    // }

    // const callUser = async(id) => {
    //     // const peer = new Peer({initiator: true, trickle: false, stream, randomBytes })
    //     const offer = await peer.getOffer()
        
    //     // peer.on('signal',(data) => {
    //         socket.emit('calluser', {userToCall: id, offer, from: me, name})
    //     // })

    //     // peer.on('stream', (currentStream) => {
    //     //     userVideo.current.srcObject = currentStream;
    //     // })

    //     socket.on('callaccepted', ({from, ans}) => {
    //         setCallAccepted(true);
    //         peer.setLocalDescription(ans)
    //     })

    //     // connectionRef.current = peer
    // }

    // const leaveCall = () => {
    //     setCallEnded(true)
    //     connectionRef.current.destroy();
    //     window.location.reload();
    // }

    const socket = useMemo(() => {
        return io("https://webrtc-app-0wb6.onrender.com")
    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )

}
