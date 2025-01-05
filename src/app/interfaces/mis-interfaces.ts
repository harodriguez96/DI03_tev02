export interface INoticias {
    status: string;
    totalResults: number;
    articles: IArticle[];
  }
  
export interface IArticle {
source: Source;
author: null | string;
title: string;
description: null | string;
url: string;
urlToImage: null | string;
publishedAt: string;
content: null | string;
}

interface Source {
id: null | string;
name: string;
}

