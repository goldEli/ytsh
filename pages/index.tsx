import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import CoverImage from "../components/cover-image"
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta http-equiv="content-type" content="text/html;charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />
          <meta http-equiv="Cache-Control" content="no-transform" />
          <meta http-equiv="Cache-Control" content="no-siteapp" />
          <meta name="applicable-device" content="pc,mobile" />
          <meta
            http-equiv="mobile-agent"
            content="format=html5; url=http://www.mepos.cn"
          />
          <meta
            http-equiv="mobile-agent"
            content="format=xhtml; url=http://www.mepos.cn"
          />
          <meta
            name="mobile-agent"
            content="format=[html5]; url=http://www.mepos.cn"
          />
          <meta name="MobileOptimized" content="width" />
          <meta name="HandheldFriendly" content="true" />
          <meta content="always" name="referrer" />
          <title>pos机免费办理申请_银联移动pos机_pos机办理网</title>
          <meta
            name="description"
            content="银联pos机怎么申请办理，央行支付牌照的pos机十大品牌排行榜测评，一清pos机，手续费0.30%立即到账，刷卡有积分，快钱刷pos机，盛付通pos机稳定不跳码免费办理
"
          />
          <meta
            name="keywords"
            content="pos机、pos机排行榜前十名、银联个人pos机申请、一清pos机办理、盛付通pos机、快钱刷pos机、拉卡拉pos机安全吗"
          />
        </Head>
        <Container>
          <Header />
          <CoverImage src="http://cdn.mepos.cn/uploads/210223/1-210223152922R8.jpg" title="banner"/>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
