import { useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { useAppDispatch } from "../../models";
import addEatSlice, { postEat } from "../../models/add-eat/reducer";
import { selectAddEatData, selectAddEatRequestStatus } from "../../models/add-eat/selectors";

const Container = styled.form`
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const InputsContainer = styled.div`
    flex-grow: 1;
`;

const commontCss = css`
    margin: 12px 16px;
`;

const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    ${commontCss};
`;

const LabelSpan = styled.span`
    margin-bottom: 4px;
    margin-left: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: static;
  bottom: 0;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 12px 16px;
    font-size: 26px;

    width: 100%;
    ${commontCss};

    cursor: pointer;
    color: green;

    /* border: none; */
    border-radius: 4px;
    background-color: inherit;
`;

const StyledInput = styled.input`
  padding: 12px 16px;
  font-size: 20px;
`;

const ButtonTitle = styled.span`
  
`;

const ButtonIcon = styled.span`
  margin-left: 8px;
  display: flex;
`;

export const AddEatPage: React.FC = () => {
    const addEatFormData = useSelector(selectAddEatData);
    const requestStatus = useSelector(selectAddEatRequestStatus);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const eat = await dispatch(postEat(addEatFormData))

        // @ts-expect-error
        navigate(`../all/${eat.payload.id}`, { replace: true });
    };

    useEffect(
        () => {
            // navigate("../success", { replace: true });
        },
        [requestStatus.ok, requestStatus.loading]
    );

    return (
        <Container onSubmit={handleSubmit}>
            <InputsContainer>
                <InputLabel>
                    <LabelSpan>Название блюда</LabelSpan>
                    <StyledInput value={addEatFormData.name} onChange={(event) => dispatch(addEatSlice.actions.editAddEatName({ name: event.target.value }))} />
                </InputLabel>
            </InputsContainer>

            <ButtonContainer>
                <Button type="submit">
                    <ButtonTitle>Добавить</ButtonTitle>
                    <ButtonIcon><FaPlusCircle /></ButtonIcon>
                </Button>
            </ButtonContainer>
        </Container>
    )
}
