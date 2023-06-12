export const myViewConfig = {
  "name": "Dani-Mouse-ChP-snRNAseq-app",
  "version": "1.0.0",
  "description": "",
  "datasets": [
        {
            "uid": "A", 
            "name": "Dani-Mouse-ChP-snRNAseq", 
            "files": [
                {
                    "fileType": "anndata.zarr", 
                    "url": "s3://cds-projects/2023-278-Mouse-ChP-snRNAseq.zarr/", 
                    "options": {
                        "obsEmbedding": [
                            {
                                "path": "obsm/X_h_umap", 
                                "dims": [0, 1], 
                                "embeddingType": "UMAP"
                            }, 
                            {
                                "path": "obsm/X_pca", 
                                "dims": [0, 1],
                                "embeddingType": "PCA"
                            }
                        ], 
                        "obsSets": [
                            {
                                "name": "celltypeB", 
                                "path": "obs/celltypeB"
                            }
                        ],
                        "obsFeatureMatrix": {
                            "path": "X"
                        }
                    }
                }
            ]
        }
    ], 
    "coordinationSpace": {
        "dataset": {"A": "A"}, 
        "embeddingType": {"A": "UMAP"}
    }, 
    "layout": [
        {
            "component": "scatterplot", 
            "coordinationScopes": {
                "dataset": "A", 
                "embeddingType": "A"
            }, 
            "x": 0.0, 
            "y": 0.0, 
            "w": 8.0, 
            "h": 8.0
        }, 
        {
            "component": "obsSets", 
            "coordinationScopes": {
                "dataset": "A"
            }, 
            "x": 8.0, 
            "y": 0.0, 
            "w": 4.0, 
            "h": 4.0
        }, 
        {
            "component": "featureList", 
            "coordinationScopes": {
                "dataset": "A"
            }, 
            "x": 8.0, 
            "y": 4.0, 
            "w": 4.0, 
            "h": 4.0
        }, 
        {
            "component": "obsSetFeatureValueDistribution", 
            "coordinationScopes": {
                "dataset": "A"
            }, 
            "x": 6.0, 
            "y": 8.0, 
            "w": 6.0, 
            "h": 4.0
        }, 
        {
            "component": "obsSetSizes", 
            "coordinationScopes": {
                "dataset": "A"
            }, 
            "x": 0.0, 
            "y": 8.0, 
            "w": 6.0, 
            "h": 4.0
        }
    ], 
    "initStrategy": "auto"
}         
