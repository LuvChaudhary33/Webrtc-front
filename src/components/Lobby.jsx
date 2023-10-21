import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketContext";

const Lobby = () => {
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
  
    const socket = useSocket();
    const navigate = useNavigate();
  
    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        socket.emit("room:join", { email, room });
      },
      [email, room, socket]
    );
  
    const handleJoinRoom = useCallback((data) => {
        const { email, room } = data;
        navigate(`/room/${room}`);
      },
      [navigate]
    );
  
    useEffect(() => {
      socket.on("room:join", handleJoinRoom);
      return () => {
        socket.off("room:join", handleJoinRoom);
      };
    }, [socket, handleJoinRoom]);
  
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl mb-10">Lobby</h1>
        <form onSubmit={handleSubmitForm}>
          <label className="text-2xl" htmlFor="email">Email ID:</label>
          <input
            className="border-2 border-black rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="text-2xl" htmlFor="room">Room Number</label>
          <input
            className="border-2 border-black rounded"
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <br />
          <button className="border-2 border-black rounded w-20 h-10 hover:bg-black/70 hover:text-white">Join</button>
        </form>
      </div>
    );
  };

export default Lobby