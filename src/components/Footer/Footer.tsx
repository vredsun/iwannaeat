import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: green;
    color: #f5f5f5;
    font-size: 20px;
    font-weight: 600;
`;

export const FooterItem = styled.div`
    flex: 1 1;
    margin: 0 auto;
    padding: 12px 16px;
`;

export const FooterItemTitle = styled.div`
    text-align: center;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterItem>
                <FooterItemTitle>new</FooterItemTitle>
            </FooterItem>
            <FooterItem>
                <FooterItemTitle>find</FooterItemTitle>
            </FooterItem>
            <FooterItem>
                <FooterItemTitle>all</FooterItemTitle>
            </FooterItem>
        </FooterContainer>
    )
}

export default Footer;