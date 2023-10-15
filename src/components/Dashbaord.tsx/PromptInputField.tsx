import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface PromptInputFieldProps {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PromptInputField = ({
  promptValue,
  setPromptValue,
  isLoading,
  setIsLoading,
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
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          multiline
          minRows={2}
          maxRows={6}
          value={promptValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPromptValue(event.target.value);
          }}
        />
        <Tooltip title="Clear Prompt" placement="top">
          <span>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="clear"
              onClick={() => {
                setPromptValue("");
                setIsLoading(false);
              }}
            >
              <ClearIcon />
            </IconButton>
          </span>
        </Tooltip>

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <LoadingButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => setIsLoading(true)}
          loading={isLoading}
        >
          <SearchIcon />
        </LoadingButton>
      </Paper>
    </>
  );
};
