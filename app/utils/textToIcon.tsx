import { MdCategory } from "react-icons/md";
import DashboardIcon from '@mui/icons-material/Dashboard';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CategoryIcon from '@mui/icons-material/Category';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import AddCardIcon from '@mui/icons-material/AddCard';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BentoIcon from '@mui/icons-material/Bento';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GamepadIcon from '@mui/icons-material/Gamepad';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HexagonIcon from '@mui/icons-material/Hexagon';
import HiveIcon from '@mui/icons-material/Hive';
import InterestsIcon from '@mui/icons-material/Interests';
export function TextToIcon({
    text, size, fontSize, className
}: {
    text: string;
    size?: "small" | "medium" | "large";
    fontSize?: number;
    className?: string;

}) {

    switch (text) {
        case "RectangleIcon":
            return (

                <>
                    <RectangleIcon fontSize={size} sx={{ fontSize: fontSize }} className={`text-sky-400 ${className}`} />

                </>

            )
        case "CategoryIcon":

            return (
                <>
                    <CategoryIcon fontSize={size} sx={{ fontSize: fontSize }} className={`text-sky-400 ${className}`} />

                </>

            )
        case "DashboardIcon":

            return (
                <>
                    <DashboardIcon fontSize={size} sx={{ fontSize: fontSize }} className={`text-sky-400 ${className}`} />

                </>

            )
        case "FormatAlignCenterIcon":
            return <FormatAlignCenterIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "FormatAlignJustifyIcon":
            return <FormatAlignJustifyIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "RadioButtonCheckedIcon":
            return <RadioButtonCheckedIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "RadioButtonUncheckedIcon":
            return <RadioButtonUncheckedIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "CircleIcon":
            return <CircleIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AddCardIcon":
            return <AddCardIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "ToggleOffIcon":
            return <ToggleOffIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "LogoutIcon":
            return <LogoutIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "GridViewIcon":
            return <GridViewIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AccountTreeIcon":
            return <AccountTreeIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "WidgetsIcon":
            return <WidgetsIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "MenuIcon":
            return <MenuIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "CodeIcon":
            return <CodeIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AcUnitIcon":
            return <AcUnitIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AlignHorizontalLeftIcon":
            return <AlignHorizontalLeftIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AlignHorizontalRightIcon":
            return <AlignHorizontalRightIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AlignVerticalBottomIcon":
            return <AlignVerticalBottomIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AlignVerticalCenterIcon":
            return <AlignVerticalCenterIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AllInclusiveIcon":
            return <AllInclusiveIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AppsIcon":
            return <AppsIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "ArticleIcon":
            return <ArticleIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AssessmentIcon":
            return <AssessmentIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "AutoAwesomeMosaicIcon":
            return <AutoAwesomeMosaicIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "BackupTableIcon":
            return <BackupTableIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "BentoIcon":
            return <BentoIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "BlurOnIcon":
            return <BlurOnIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "BorderAllIcon":
            return <BorderAllIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "CalendarViewDayIcon":
            return <CalendarViewDayIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "DashboardCustomizeIcon":
            return <DashboardCustomizeIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "DeveloperBoardIcon":
            return <DeveloperBoardIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "GamepadIcon":
            return <GamepadIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "GraphicEqIcon":
            return <GraphicEqIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "HexagonIcon":
            return <HexagonIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "HiveIcon":
            return <HiveIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;
        case "InterestsIcon":
            return <InterestsIcon fontSize={size} sx={{ fontSize }} className={`text-sky-400 ${className}`} />;

        default:
            return <CategoryIcon fontSize={size} sx={{ fontSize: fontSize }} className={`text-sky-400 ${className}`} />

    }
}