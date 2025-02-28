import styled from "styled-components";
import { theme } from "../../style/theme";
import { Artists } from "../../model/artists.model";

interface Props {
  artists: Artists[];
}

export default function ArtistIntroduce({ artists }: Props) {
  artists = artists.filter((data, i) => i !== 0);

  return (
    <StyledArtistIntroduce>
      <div className="artists">
        {artists.map((data, i) => (
          <div className="artist">
            <div className="poster">
              <img src={`${process.env.REACT_APP_S3_URL}${data.AimgUrl}`} />
            </div>

            <div className="contents">
              <span className="en">{data.en}</span>
              <span className="kr">{data.kr}</span>
              <div className="carrer">
                {data.edu?.map((info) => (
                  <span>{info}</span>
                ))}
                {data.carrer?.map((info) => (
                  <span>{info}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledArtistIntroduce>
  );
}

const StyledArtistIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 10px;
  }
  .artists {
    display: flex;
    flex-direction: column;
    .artist {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 100px;
      @media (max-width: ${theme.viewSize.phone}) {
        margin-bottom: 40px;
      }
      .poster {
        img {
          width: 550px;
          height: 300px;
          object-fit: contain;
          @media (max-width: ${theme.viewSize.phone}) {
            width: 160px;
            height: 110px;
          }
        }
      }

      .contents {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 30%;
        @media (max-width: ${theme.viewSize.phone}) {
          width: 50%;
        }
        .en {
          font-size: ${theme.text.size.medium};
          font-weight: ${theme.text.weight.semithin};
          color: ${theme.color.lightgray};
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.verysmall};
          }
        }
        .kr {
          font-size: ${theme.text.size.large};
          font-weight: ${theme.text.weight.medium};
          margin-top: 5px;
          @media (max-width: ${theme.viewSize.phone}) {
            font-size: ${theme.text.size.small};
          }
        }
        .carrer {
          display: flex;
          flex-direction: column;
          span {
            margin-top: 7px;
            font-size: ${theme.text.size.semismall};
            font-weight: ${theme.text.weight.semithin};
            @media (max-width: ${theme.viewSize.phone}) {
              font-size: ${theme.text.size.verysmall};
              font-weight: ${theme.text.weight.semithin};
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`;
