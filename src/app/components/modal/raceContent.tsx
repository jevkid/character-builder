import * as React from 'react';
import { AxiosResponse } from 'axios';
import { BaseAxiosInstance } from '../../../api';
import { StyledP } from '../../styles';
import { RaceModalTypes } from '../../../types';

interface ModalProps {
  apiUrl: string;
}

export const RaceContent: React.FC<ModalProps> = (props) => {
  const [apiContent, setApiContent] = React.useState<RaceModalTypes | null>();
  const [additionalApiContent, setAdditionalApiContent] =
    React.useState<RaceModalTypes | null>();

  React.useEffect(() => {
    if (props.apiUrl) {
      setApiContent(null);
      BaseAxiosInstance.get(props.apiUrl)
        .then((success: AxiosResponse) => {
          if (success.data) {
            setApiContent(success.data);
            return success;
          }
        })
        .catch((reason: AxiosResponse) => reason);
    }
  }, [props.apiUrl]);

  React.useEffect(() => {
    if (apiContent?.reference?.url) {
      setAdditionalApiContent(null);
      BaseAxiosInstance.get(apiContent.reference.url)
        .then((success: AxiosResponse) => {
          if (success.data) {
            setAdditionalApiContent(success.data);
            return success;
          }
        })
        .catch((reason: AxiosResponse) => reason);
    }
  }, [apiContent]);

  return (
    <div>
      {apiContent && (
        <>
          {apiContent.name && (
            <StyledP>
              <strong>{apiContent.name}</strong>
            </StyledP>
          )}
          <br />
          {apiContent.desc && (
            <>
              {typeof apiContent.desc !== 'string' &&
                apiContent.desc.map((desc: string) => (
                  <StyledP key={desc}>{desc}</StyledP>
                ))}
              {apiContent.desc && typeof apiContent.desc === 'string' && (
                <StyledP>{apiContent.desc}</StyledP>
              )}
              <br />
            </>
          )}
          {apiContent.typical_speakers && (
            <>
              <StyledP>
                <strong>Typical speakers:</strong>
              </StyledP>
              {typeof apiContent.typical_speakers !== 'string' &&
                apiContent.typical_speakers.map((desc: string) => (
                  <StyledP key={desc}>{desc}</StyledP>
                ))}
              {apiContent.typical_speakers &&
                typeof apiContent.typical_speakers === 'string' && (
                  <StyledP>{apiContent.typical_speakers}</StyledP>
                )}
            </>
          )}
          {apiContent.skills && (
            <>
              <StyledP>
                <strong>Skills:</strong>
              </StyledP>
              {apiContent.skills.length > 0 &&
                apiContent.skills.map((skill) => (
                  <StyledP key={skill.index}>{skill.name}</StyledP>
                ))}
            </>
          )}
          {additionalApiContent && <></>}
        </>
      )}
    </div>
  );
};
