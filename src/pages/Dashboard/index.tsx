import {
  Alert,
  AlertTitle,
  Grid,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Flip, Id, toast, Zoom } from "react-toastify";
import { AiModalCard } from "../../components/Dashbaord.tsx/AiModalCard";
import { ImageGalleryViewer } from "../../components/Dashbaord.tsx/ImageGalleryViewer";
import { PromptInputField } from "../../components/Dashbaord.tsx/PromptInputField";
import { RecommedPromptCard } from "../../components/Dashbaord.tsx/RecommedPromptCard";

export default function Dashboard() {
  const [promptValue, setPromptValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [presetIndex, setPresetIndex] = useState("");

  const toastId = React.useRef<Id | null | undefined>(null);

  const isDestopMode = useMediaQuery("(min-width:600px)");

  const notifyLoading = () => {
    if (null !== toastId)
      toastId.current = toast.loading(
        "🙏 Please be patient, Generating Image now...",
        {
          position: "top-center",
          style: { width: isDestopMode ? "430px" : "100%" },
          transition: Zoom,
        }
      );
  };

  const dismissLoading = () => {
    if (
      null !== toastId &&
      null !== toastId.current &&
      undefined !== toastId.current
    )
      toast.update(toastId.current, {
        render: "Image generation is completed",
        style: { width: isDestopMode ? "320px" : "100%" },
        type: "success",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        transition: Flip,
      });
  };

  const dismissAll = () => toast.dismiss();

  useEffect(() => {
    if (isLoading) {
      notifyLoading();
    } else {
      dismissLoading();
    }
    return () => dismissLoading();
  }, [isLoading]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Alert severity="warning" sx={{ pb: 0 }}>
                <AlertTitle>
                  <strong>
                  Please Select Recommended Prompt, and then Update Your Prompt
                  </strong>
                </AlertTitle>
              </Alert>
            </Grid>
            <Grid item xs={isDestopMode ? 4 : 12}>
              <RecommedPromptCard
                presetIndex="1"
                promptValue={promptValue}
                setPromptValue={setPromptValue}
                setPresetIndex={setPresetIndex}
                promptText="Portrait of an old fisherman at sea, using natural light to highlight weathered textures."
              />
            </Grid>
            <Grid item xs={isDestopMode ? 4 : 12}>
              <RecommedPromptCard
                presetIndex="2"
                promptValue={promptValue}
                setPromptValue={setPromptValue}
                setPresetIndex={setPresetIndex}
                promptText="Portrait of a professional dancer expressing emotion through movement, with dramatic lighting."
              />
            </Grid>
            <Grid item xs={isDestopMode ? 4 : 12}>
              <RecommedPromptCard
                presetIndex="3"
                promptValue={promptValue}
                setPromptValue={setPromptValue}
                setPresetIndex={setPresetIndex}
                promptText="Joyful portrait of someone laughing in the rain, using high shutter speed to freeze raindrops."
              />
            </Grid>
            <Grid item xs={12}>
              <PromptInputField
                setPresetIndex={setPresetIndex}
                presetIndex={presetIndex}
                promptValue={promptValue}
                setPromptValue={setPromptValue}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </Grid>

            <Grid item xs={isDestopMode ? 4 : 12}>
              <AiModalCard />
            </Grid>
            <Grid item xs={isDestopMode ? 8 : 12}>
              {!isLoading && (
                <ImageGalleryViewer
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              )}
              {isLoading && (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Skeleton
                        sx={{ height: 500 }}
                        animation="wave"
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton
                        animation="wave"
                        height={150}
                        variant="rectangular"
                      />
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
