import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { toast, Zoom } from "react-toastify";
import { yellow } from "@mui/material/colors";

interface RecommedPromptCardProps {
  presetIndex: string;
  promptText: string;
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  setPresetIndex: React.Dispatch<React.SetStateAction<string>>;
}

export const RecommedPromptCard = ({
  presetIndex,
  promptText,
  promptValue,
  setPromptValue,
  setPresetIndex,
}: RecommedPromptCardProps) => {
  const isDestopMode = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Card>
        <CardActionArea
          component={Button}
          onClick={() => {
            setPromptValue(promptText);
            setPresetIndex(presetIndex);
            toast.success(" Prompt Text Copied to Input Field", {
              position: "top-center",
              style: { width: isDestopMode ? "350px" : "100%" },
              autoClose: 1000,
              hideProgressBar: true,
              transition: Zoom,
              icon: (
                <AutoFixHighIcon fontSize="small" sx={{ color: yellow[400] }} />
              ),
              closeButton: false,
            });
          }}
        >
          <CardContent sx={{ minWidth: "100%", pb: 2 }}>
            <TextField
              id="prompt"
              label={`Recommeded Prompt ${presetIndex}`}
              multiline
              fullWidth
              rows={2}
              value={promptText}
              variant="standard"
              InputProps={{ readOnly: true }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
