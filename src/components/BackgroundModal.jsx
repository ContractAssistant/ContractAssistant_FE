import useModalStore from "../store/useModalStore";
import styled from "styled-components";

const BackgroundModal = ({ children, onClick }) => {
  const { setShowModal } = useModalStore();

  //   const closeModal = () => {
  //     if (onClick) {
  //       onClick();
  //     } else {
  //       setShowModal(false);
  //     }
  //   };

  return (
    <BackgroundWrapper>
      <div>{children}</div>
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default BackgroundModal;
