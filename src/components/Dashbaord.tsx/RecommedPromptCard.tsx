import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { toast, Zoom } from "react-toastify";
import { yellow } from "@mui/material/colors";

interface RecommedPromptCardProps {
  promptText: string;
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
}

export const RecommedPromptCard = ({
  promptText,
  promptValue,
  setPromptValue,
}: RecommedPromptCardProps) => {
  const isDestopMode = useMediaQuery("(min-width:600px)");

  return (
    <Card>
      <CardHeader
        sx={{ pb: "0px", pt: "5px", backgroundColor: "#429EBD" }}
        title={
          <>
            <Tooltip title="Click to copy" placement="top">
              <span>
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(promptText);
                    toast.success(" Prompt Text Copied to Clipboard", {
                      position: "top-center",
                      style: { width: isDestopMode ? "350px" : "100%" },
                      autoClose: 1000,
                      hideProgressBar: true,
                      icon: <ContentCopyIcon fontSize="small" />,
                      transition: Zoom,
                      closeButton: false,
                    });
                  }}
                >
                  <ContentCopyIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Click to input in prompt field" placement="top">
              <span>
                <IconButton
                  onClick={() => {
                    setPromptValue(promptText);
                    toast.success(" Prompt Text Copied to Input Field", {
                      position: "top-center",
                      style: { width: isDestopMode ? "350px" : "100%" },
                      autoClose: 1000,
                      hideProgressBar: true,
                      transition: Zoom,
                      icon: (
                        <AutoFixHighIcon
                          fontSize="small"
                          sx={{ color: yellow[400] }}
                        />
                      ),
                      closeButton: false,
                    });
                  }}
                >
                  <AutoFixHighIcon
                    fontSize="small"
                    sx={{ color: yellow[400] }}
                  />
                </IconButton>
              </span>
            </Tooltip>
          </>
        }
      />
      <CardContent sx={{ pt: "10px" }}>
        <TextField
          id="prompt"
          label="Recommeded Prompt"
          multiline
          fullWidth
          rows={2}
          value={promptText}
          variant="standard"
          InputProps={{ readOnly: true }}
        />
      </CardContent>
    </Card>
  );
};
