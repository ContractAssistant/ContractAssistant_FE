import styled from "styled-components";
import { IoIosChatbubbles, IoIosInformationCircle, IoIosAddCircle } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import useModalStore from "../store/useModalStore";
// import axios from "axios";

const ListBar = ({ onChatClick }) => {
  const [chatList, setChatList] = useState(["근로계약서", "임대차계약서", "대출계약서", "기타계약서"]);


  const addNewChat = () => {
    const newList = [...chatList, `계약서 ${chatList.length + 1}`];
    setChatList(newList);
  };

  const handleChatClick = (index) => {
    onChatClick(index);

  };

  const { setModalType, setShowModal } = useModalStore();
  const handleShowLoginModal = () => {
    setModalType("MinWageCal");
    setShowModal(true);
  };

  return (
    <Wrapper>
      <Box>
        <IoIosChatbubbles size="20" color="#000000" />
        <MainTitle>Chat List</MainTitle>
      </Box>
      <ChatBoxList>
        <AddBox onClick={addNewChat}>
          <MainTitle>New Chat</MainTitle>
          <IoIosAddCircle size="20" color="#000000" />
        </AddBox>
        {chatList.map((chat, index) => (
          <ChatBox key={index} onClick={() => handleChatClick(index)}>
            <MainTitle>{chat}</MainTitle>
          </ChatBox>
        ))}
      </ChatBoxList>
      <Box>
        <AiFillQuestionCircle size="20" color="#000000" />
        <MainTitle>For Help?</MainTitle>
      </Box>
      <Box onClick={() => handleShowLoginModal()}>
        <IoIosInformationCircle size="20" color="#000000" />
        <MainTitle>MinWage Calculator</MainTitle>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 100vh;
  border-right: 1px solid #e4e4e7;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 265px;
  height: 23px;
  padding: 20px 0px 20px 20px;
  border-top: 1px solid #e4e4e7;
  border-bottom: 1px solid #e4e4e7;
  cursor: pointer;
`;

const AddBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 245px;
  height: 23px;
  padding: 20px;
  border-bottom: 1px solid #e4e4e7;
  cursor: pointer;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 265px;
  height: 23px;
  padding: 20px 0px 20px 20px;
  border-bottom: 1px solid #e4e4e7;
`;

const MainTitle = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 0px 6px;
`;

const ChatBoxList = styled.div`
  width: 285px;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px; /* Width of scrollbar */
    height: 0px; /* Set to 0 for horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000; /* Scrollbar color */
    border-radius: 4px; /* Round the corners of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of scrollbar track */
  }
`;

export default ListBar;
