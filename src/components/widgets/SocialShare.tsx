import React from "react"
import styled from "styled-components"
import { globalHistory } from "@reach/router"
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

import { __DEV__ } from "../../utils/helper"
import { QueryType } from "global"

type SocialShareProps = {
  title?: string
  description?: string
  headerTitle?: string
}

export default function SocialShare({
  title,
  description,
  headerTitle,
}: SocialShareProps) {
  const {
    site: { siteMetadata },
  } = useStaticQuery<QueryType>(query)

  title = title || siteMetadata.title
  description = description || siteMetadata.description

  const siteUrl = __DEV__
    ? `${siteMetadata.siteUrl}/${title}`
    : globalHistory.location.href

  return (
    <SocialContainer>
      {headerTitle && <HeaderTitle>{headerTitle}</HeaderTitle>}

      <ul>
        <li>
          <a
            className="facebook"
            href={`https://facebook.com/sharer/sharer.php?u=${siteUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={20} />
          </a>
        </li>

        <li>
          <a
            className="twitter"
            href={`https://twitter.com/share?url=${siteUrl}&text=${title}&via=twitterHandle`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </li>

        <li>
          <a
            className="linkedin"
            href={`https://linkedin.com/shareArticle?mini=true&url=${siteUrl}&title=${title}&summary=${description}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
        </li>
      </ul>
    </SocialContainer>
  )
}

const HeaderTitle = styled.h3`
  text-transform: uppercase;
  padding-bottom: 30px;
`

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;

    li {
      margin: 0 10px;

      a {
        padding: 15px;
        border-radius: 5px;
        background-color: ${p => p.theme.colors.dark};
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${p => p.theme.colors.light};
        transition: all 0.3s;
        border: 2px solid ${p => p.theme.colors.dark};

        &:hover {
          border-color: ${p => p.theme.colors.main};
        }
      }
    }
  }
`

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
