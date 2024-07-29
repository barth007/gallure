import * as React from "react";
import photo1 from "../../../images/cards/photo1.jpeg"
import photo2 from "../../../images/cards/photo2.jpeg"
import photo3 from "../../../images/cards/photo3.jpeg"
import photo4 from "../../../images/cards/photo4.jpeg"
import photo5 from "../../../images/cards/photo5.jpeg"
import photo6 from "../../../images/cards/photo6.jpeg"
function ListImages(props) {
    // const ["div-3", "div-8", ]
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">
                <img
                  loading="lazy"
                  srcSet={photo1}
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet={photo1}
                  className="img-2"
                />
              </div>
              <div className="div-5">
                <img
                  loading="lazy"
                  srcSet={photo2}
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet={photo2}
                  className="img-3"
                />
              </div>
              <div className="div-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9d81f955572ac96b201b94e517a3a922334ca48b6bf30fba1240864aa8516a7?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b4a5d6ee65ac11c7d0402e6e42a6059dc47c1793e1532a84e19994409299618?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img-4"
                />
              </div>
              <div className="div-7">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98daa61300cae679f4989dfa15bc306ca9d9daedb4e086041f94f916ba594905?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe9d73d5b0c37b70bcfa03379e4328aad2c11361dbc3d6808dd77f103e06fec?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img-5"
                />
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-8">
              <div className="div-9">
                <img
                  loading="lazy"
                  srcSet={photo3}
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet={photo3}
                  className="img-6"
                />
              </div>
              <div className="div-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/645676691dfe6a86ae7ba3a900bed3d76882541b76602b1a63d75c1bd9fe96d6?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img"
                />
                <div className="div-11">
                  <img
                    loading="lazy"
                    srcSet={photo4}
                    className="img"
                  />
                  <img
                    loading="lazy"
                    srcSet={photo4}
                    className="img-7"
                  />
                </div>
              </div>
              <div className="div-12">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a420a3f6b8189e019a79edac7b92cecf10a7d245b927840f4ddf7d51f7a27581?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae1c192a278b40208b5d8ca33091d6de57a0f7181f463605a0337f3f73d93da?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img-8"
                />
              </div>
              <div className="div-13">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83f0ad9812f688267ee17e9f1c5327dac919a5f63bef124495bd368d99ca8ece?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25b9baaf1fabc266fd55e57d7c7bade87ba336c55f52d224b9627d6acc473a?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                  className="img-9"
                />
              </div>
            </div>
          </div>
          <div className="column-3">
            <div className="div-14">
              <div className="div-15">
                <div className="div-16">
                  <div className="column-4">
                    <div className="div-17">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ba7a6f879ecb7a995c314e6addf59ac872c2878e9fd7052597f45f7768d23d?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                        className="img"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b62887eb47177f4a38fc98694bd3d3334197266225f51d08889043ccbd4caa0?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                        className="img-10"
                      />
                    </div>
                  </div>
                  <div className="column-5">
                    <div className="div-18">
                      <img
                        loading="lazy"
                        srcSet={photo6}
                        className="img"
                      />
                      <img
                        loading="lazy"
                        srcSet={photo6}
                        className="img-11"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-19">
                <div className="div-20">
                  <div className="column-6">
                    <div className="div-21">
                      <div className="div-22">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cddcb9152ae867ec0efe9c3f132ed4bd5384240f090af44981d78531dcbfe83?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/431ff7b0ec8de7590f3ef36e3bf24e3e2ab78df71c7effb0e30418701c73b927?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img-12"
                        />
                      </div>
                      <div className="div-23">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eef84bed3bfc6ff842d516c54fae48de23461540211ec032f02c187c31f45aa7?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c74b270b0d3397c24b2ad1471e46edbd41e7bb3988d9193e8f343307670992bf?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img-13"
                        />
                      </div>
                      <div className="div-24">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15a54642a784817523c38af89a296db0fb61f414073915c840a2742056cecddf?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/259074644ff0f4c46c6bc28288a5efc8be9135ea859accdef6978e38ccb0bba0?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img-14"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column-7">
                    <div className="div-25">
                      <div className="div-26">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf4bf5d187e5f59062ec20006d84be3a1f4e919ed33e28234dd80f2e4b2ad3ae?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fa5b2305fe9d910164355af3e280e1c2a6541d55ecabe0787add0f4706d8de6?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img-15"
                        />
                      </div>
                      <div className="div-27">
                        <img
                          loading="lazy"
                          srcSet={photo5}
                          className="img"
                        />
                        <img
                          loading="lazy"
                          srcSet={photo5}
                          className="img-16"
                        />
                      </div>
                      <div className="div-28">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/090fe769e00f658a0aa54d0e97baecd580cc5c086e6a2b25d81aab6662ecbec3?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                          className="img"
                        />
                        <div className="div-29">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56d45af69da3b16a28be5629650e9e88e52e58cd6d40c745e84b88ac85af4fb?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                            className="img"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f3e2fda87c4b06c8a8a75cd3937368d66e157a2ecfc6587d0df15fbf6e5b48?apiKey=c79a152b41e64f7db55346c2899c15e3&"
                            className="img-17"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          align-self: stretch;
          margin-right: auto;
          margin-left: auto;
          max-width: 1400px;
        }
        .div-2 {
          gap: 21px;
          display: flex;
          justify-content: end;
          margin-left: 90px;
          margin-right: 90px;
          height: auto;
          // border: 1px #000 solid;
          background-color: #FFF;
          max-width: 1300px;
          padding-bottom: 52px;
          margin-top: 14%;
          margin-bottom: -446px
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 17%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-top: 10px;
          }
        }
        .div-4 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.25;
          width: 100%;
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .img-2 {
          aspect-ratio: 1.2;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-5 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          margin-top: 6px;
          width: 100%;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-6 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.44;
          margin-top: 6px;
          width: 100%;
        }
        .img-4 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-7 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.44;
          margin-top: 7px;
          width: 100%;
        }
        .img-5 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 17%;
          margin-left: -8px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-8 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-top: 10px;
          }
        }
        .div-9 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.37;
          width: 100%;
        }
        .img-6 {
          aspect-ratio: 1.37;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-10 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          margin-top: 7px;
          width: 100%;
          justify-content: center;
        }
        .div-11 {
          disply: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          display: flex;
          aspect-ratio: 1.5;
          width: 100%;
          justify-content: center;
        }
        .img-7 {
          aspect-ratio: 1.49;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-12 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          margin-top: 6px;
          width: 100%;
        }
        .img-8 {
          aspect-ratio: 1.49;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-13 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.44;
          margin-top: 6px;
          width: 100%;
        }
        .img-9 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: -8px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-14 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            margin-top: 10px;
          }
        }
        .div-15 {
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-17 {
          disply: flex;
          flex-direction: column;
          max-width: 335px;
          justify-content: center;
          align-self: stretch;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-top: 7px;
          }
        }
        .img-10 {
          aspect-ratio: 1.49;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: -8px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-18 {
          disply: flex;
          flex-direction: column;
          max-width: 335px;
          justify-content: center;
          align-self: stretch;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 7px;
          }
        }
        .img-11 {
          aspect-ratio: 1.49;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-19 {
          margin-top: 6px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
          }
        }
        .div-20 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-20 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-21 {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 7px;
          }
        }
        .div-22 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.5;
          width: 100%;
        }
        .img-12 {
          aspect-ratio: 1.49;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-23 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.19;
          margin-top: 6px;
          width: 100%;
        }
        .img-13 {
          aspect-ratio: 1.19;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-24 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.45;
          margin-top: 6px;
          width: 100%;
        }
        .img-14 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: -8px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .div-25 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin-top: 7px;
          }
        }
        .div-26 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.02;
          width: 100%;
        }
        .img-15 {
          aspect-ratio: 1.02;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-27 {
          disply: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.45;
          margin-top: 7px;
          width: 100%;
        }
        .img-16 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-28 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          aspect-ratio: 1.44;
          margin-top: 7px;
          width: 100%;
          justify-content: center;
        }
        .div-29 {
          disply: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          display: flex;
          aspect-ratio: 1.44;
          width: 100%;
          justify-content: center;
        }
        .img-17 {
          aspect-ratio: 1.45;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 900px){
          .div-2 {
            flex-direction: row;
            align-items: stretch;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
            margin-left: 30px;
            margin-right: 30px;
            }
          .column {
            display: flex;
            flex-direction: column;
            line-height: normal;
            margin-left: 0px;
            width: 40%;
          }
          .column-2 {
            display: flex;
            flex-direction: column;
            line-height: normal;
            margin-left: -8px;
            width: 40%;
          }
          .div-14 {
            
            margin-top: -11px;
          }
          div-19 {
            margin-top: -35px;
          }
          .column-3 {
            width: 80%;
          }
          .div-14 {
            display: flex;
            flex-direction: row;
          }
          .div-19 {
            margin-top: -36px;
            margin-left: 7px;
          }
          .column-7{
            display:none;
            // visibility: hidden;
          }
          .column-3{
            display: none;
          }
        }
        @media (max-width: 800px){
          .div-19 {
            margin-top: -36px;
            margin-left: 100px;
            width: 56%;
          }

        }
        @media (max-width: 700px){
          .div-2{
            margin-bottom: -152px;
          }
        }
        @media (max-width: 600px){
          .div-2 {
            margin-bottom: -184px;
          }
        }
        @media (max-width: 400px){
          .div-2{
            margin-bottom: -155px;
          }
          .div-21 {
            margin-top: 32px;
            margin-left: 6px;
          }
          column-3 {
            width: 87%;
          }
          .div-15 {
            
            margin-left: 8px;
          } 
          .column-5 {
            margin-left: 1px;
          }
        }
      `}</style>
    </>
  );
}
export default ListImages;

