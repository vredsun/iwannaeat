import { FaList, FaMagic, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: green;
    color: #f5f5f5;
    font-size: 20px;
`;

export const FooterItem = styled(Link)`
    flex: 1 1;
    margin: 0 auto;
    padding: 12px 16px;
    justify-content: center;
    display: flex;
    color: #f5f5f5;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterItem to="/new">
               <FaPlus />
            </FooterItem>
            <FooterItem to="/suggest">
                <FaMagic />
            </FooterItem>
            <FooterItem to="/all">
                <FaList />
            </FooterItem>
        </FooterContainer>
    )
}

export default Footer;