import { StatTitle } from "./StatisticsTitle.styled";


export const StatisticsTitle = ({title}) => {
    return (
        title && <StatTitle>{title}</StatTitle>
    );
};