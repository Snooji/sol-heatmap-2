const endpoint = "https://rest-api.hellomoon.io/v0/nft/collection/stats";

fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // for testing purposes only
    
    const collectionData = data.data[0];
    
    // create heatmap using the collection data
    const heatmapDiv = document.getElementById("heatmap");
    heatmapDiv.innerHTML = `
      <div class="collection">
        <div class="collection-name">${collectionData.collectionName}</div>
        <img class="collection-image" src="${collectionData.sample_image}">
        <div class="collection-details">
          <div class="collection-detail">
            <div class="detail-name">Total Supply:</div>
            <div class="detail-value">${collectionData.supply}</div>
          </div>
          <div class="collection-detail">
            <div class="detail-name">Market Cap (Solana):</div>
            <div class="detail-value">${collectionData.marketCapSol}</div>
          </div>
          <div class="collection-detail">
            <div class="detail-name">Average Wash Trading Score:</div>
            <div class="detail-value">${collectionData.averageWashScore}</div>
          </div>
          <div class="collection-detail">
            <div class="detail-name">Listing Count:</div>
            <div class="detail-value">${collectionData.listingCount}</div>
          </div>
          <div class="collection-detail">
            <div class="detail-name">NFT Narrative:</div>
            <div class="detail-value">${collectionData.narrative}</div>
          </div>
          <div class="collection-detail">
            <div class="detail-name">Magic Eden Holdings:</div>
            <div class="detail-value">${collectionData.magic_eden_holding}</div>
          </div>
        </div>
      </div>
    `;
    
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
