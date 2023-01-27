import { request, gql } from "graphql-request";

export default async function handler(req, res) {
  const { name } = req.query;

  const query = gql`
   {
    items(name: "${name}") {
        id
        name     
        description           
        iconLink
        link
        sellFor {
          price
          source
        }
        buyFor {
          price
          source
        }
        usedInTasks {
          name
          trader {
            name
          }
          wikiLink
          minPlayerLevel
        }
        low24hPrice
        high24hPrice        
        avg24hPrice
        bartersFor{
          level
          trader{
            name
          }
          requiredItems{
            item{
              name        
            }
            quantity
          }
        }
        bartersUsing{
          level
          trader{
            name
          }
          requiredItems{
            item{
              name        
            }
            quantity
          }
          rewardItems{
            item{
              name
            }
            quantity
          }
        }
        craftsFor{
          level
          station{
            name
          }
          requiredItems{
            item{
              name
            }
            quantity
          }
          rewardItems{
            item{
              name
            }
            quantity
          }
        }
        craftsUsing{
          level
          station{
            name
          }
          requiredItems{
            item{
              name
            }
            quantity
          }
          rewardItems{
            item{
              name
            }
            quantity
          }
        }
      }
    }
  `;

  let results = [];

  await request("https://api.tarkov.dev/graphql", query)
    .then((data) => {
      data.items.forEach((item) => {
        results.push(item);
      });
      res.status(200).json({
        data: results,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: {
          code: 500,
          message: error,
        },
      });
    });
}
