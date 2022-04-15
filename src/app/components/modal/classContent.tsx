import * as React from 'react';
import { AxiosResponse } from 'axios';
import { BaseAxiosInstance } from '../../../api';
import { StyledP, StyledList, StyledListItem } from '../../styles';
import { ClassModalTypes } from '../../../types';

interface ModalProps {
  apiUrl: string;
}

export const ClassContent: React.FC<ModalProps> = (props) => {
  const [apiContent, setApiContent] = React.useState<ClassModalTypes | null>();
  const [additionalApiContent, setAdditionalApiContent] =
    React.useState<ClassModalTypes | null>();

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
                  <StyledP>{desc}</StyledP>
                ))}
              {apiContent.desc && typeof apiContent.desc === 'string' && (
                <StyledP>{apiContent.desc}</StyledP>
              )}
              <br />
            </>
          )}
          {apiContent.races && apiContent.races.length > 0 && (
            <>
              <StyledP>
                <strong>Races:</strong>
              </StyledP>
              {apiContent.races.length > 0 &&
                apiContent.races.map((race) => (
                  <StyledP key={race.index}>{race.name}</StyledP>
                ))}
            </>
          )}
          {additionalApiContent && (
            <>
              {additionalApiContent.category_range && (
                <StyledP>
                  <strong>Category range:</strong>{' '}
                  {additionalApiContent.category_range}
                </StyledP>
              )}
              {additionalApiContent.damage && (
                <StyledP>
                  <strong>Damage:</strong>{' '}
                  {additionalApiContent.damage.damage_dice}
                </StyledP>
              )}
              {additionalApiContent.properties &&
                additionalApiContent.properties.length > 0 && (
                  <>
                    <StyledP>
                      <strong>Properties:</strong>
                    </StyledP>
                    <StyledList>
                      {additionalApiContent.properties.length > 0 &&
                        additionalApiContent.properties.map((property) => (
                          <StyledListItem key={property.index}>
                            {property.name}
                          </StyledListItem>
                        ))}
                    </StyledList>
                  </>
                )}
            </>
          )}
        </>
      )}
    </div>
  );
};
