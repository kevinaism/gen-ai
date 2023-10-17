import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import {
  Badge,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { blueGrey, yellow } from "@mui/material/colors";

interface PromptInputFieldProps {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  presetIndex: string;
  setPresetIndex: React.Dispatch<React.SetStateAction<string>>;
}

export const PromptInputField = ({
  promptValue,
  setPromptValue,
  isLoading,
  setIsLoading,
  presetIndex,
  setPresetIndex,
}: PromptInputFieldProps) => {
  const theme = useTheme();

  const isDestopMode = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {presetIndex === "" && (
          <Tooltip
            title="Please Select Recommended Prompt"
            placement="top"
            enterTouchDelay={0}
          >
            <HelpOutlineIcon
              fontSize="large"
              sx={{ ml: 1, color: yellow[800] }}
            />
          </Tooltip>
        )}
        {presetIndex === "1" && (
          <LooksOneIcon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        {presetIndex === "2" && (
          <LooksTwoIcon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        {presetIndex === "3" && (
          <Looks3Icon fontSize="large" sx={{ ml: 1, color: blueGrey[900] }} />
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          multiline
          minRows={2}
          maxRows={6}
          value={promptValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPromptValue(event.target.value);
          }}
          disabled={presetIndex === ""}
        />
        <Tooltip title="Clear Prompt" placement="top">
          <span>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="clear"
              onClick={() => {
                setPromptValue("");
                setPresetIndex("");
                setIsLoading(false);
              }}
            >
              <ClearIcon />
            </IconButton>
          </span>
        </Tooltip>

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <LoadingButton
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => setIsLoading(true)}
          disabled={presetIndex === ""}
          loading={isLoading}
        >
          <SendIcon />
        </LoadingButton>
      </Paper>
    </>
  );
};
