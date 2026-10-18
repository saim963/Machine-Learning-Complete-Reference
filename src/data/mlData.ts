export interface Topic {
  id: string;
  title: string;
  emoji: string;
  color: string;
  sections: Section[];
}

export interface Section {
  title: string;
  content: string;
  formulas?: Formula[];
  keyPoints?: string[];
  code?: string;
  table?: TableData;
}

export interface Formula {
  name: string;
  latex: string;
  description: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export const mlTopics: Topic[] = [
  {
    id: "fundamentals",
    title: "ML Fundamentals",
    emoji: "🧠",
    color: "violet",
    sections: [
      {
        title: "What is Machine Learning?",
        content:
          "Machine Learning is a subset of Artificial Intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing computer programs that can access data and use it to learn for themselves.",
        keyPoints: [
          "ML is the science of getting computers to learn automatically from data",
          "Three paradigms: Supervised, Unsupervised, Reinforcement Learning",
          "Goal: Generalize from training data to unseen examples",
          "Requires: Data → Model → Training → Evaluation → Deployment",
          "Bias-Variance Tradeoff is central to all ML problems",
        ],
      },
      {
        title: "Types of Machine Learning",
        content:
          "ML is broadly categorized into three main types based on the nature of the learning signal or feedback available to the system.",
        table: {
          headers: ["Type", "Input", "Output", "Examples"],
          rows: [
            [
              "Supervised",
              "Labeled data (X, y)",
              "Prediction/Classification",
              "Spam detection, House prices",
            ],
            [
              "Unsupervised",
              "Unlabeled data (X)",
              "Patterns/Clusters",
              "Customer segmentation, Anomaly detection",
            ],
            [
              "Reinforcement",
              "Environment + Rewards",
              "Optimal Policy",
              "Game playing, Robotics",
            ],
            [
              "Semi-supervised",
              "Partially labeled",
              "Prediction",
              "Web content classification",
            ],
            [
              "Self-supervised",
              "Data itself as label",
              "Representations",
              "GPT, BERT pretraining",
            ],
          ],
        },
        keyPoints: [
          "Supervised Learning: learns mapping from input to output",
          "Unsupervised Learning: finds hidden structure in unlabeled data",
          "Reinforcement Learning: agent learns via trial and error with rewards",
        ],
      },
      {
        title: "Bias-Variance Tradeoff",
        content:
          "The bias-variance tradeoff is a fundamental concept describing the tradeoff between a model's ability to minimize bias (error from wrong assumptions) and variance (error from sensitivity to training data fluctuations).",
        formulas: [
          {
            name: "Expected Error Decomposition",
            latex: "E[(y - ŷ)²] = Bias² + Variance + Irreducible Noise",
            description:
              "Total expected error = bias squared + variance + noise",
          },
          {
            name: "Bias",
            latex: "Bias = E[ŷ] - y",
            description: "Average deviation of predictions from true values",
          },
          {
            name: "Variance",
            latex: "Variance = E[(ŷ - E[ŷ])²]",
            description: "Spread of predictions around their mean",
          },
        ],
        keyPoints: [
          "High Bias → Underfitting: model too simple, misses patterns",
          "High Variance → Overfitting: model too complex, memorizes noise",
          "Increasing model complexity reduces bias but increases variance",
          "Goal: find sweet spot with lowest total error on validation set",
          "Regularization helps control variance without much bias increase",
        ],
      },
      {
        title: "The ML Pipeline",
        content:
          "A systematic process for building, evaluating, and deploying machine learning models.",
        keyPoints: [
          "1. Problem Definition: Frame as ML task, define success metrics",
          "2. Data Collection: Gather relevant, sufficient, representative data",
          "3. Data Preprocessing: Clean, transform, handle missing values",
          "4. Feature Engineering: Create informative features from raw data",
          "5. Model Selection: Choose appropriate algorithm for the task",
          "6. Training: Fit model to training data, tune hyperparameters",
          "7. Evaluation: Assess on held-out test set using proper metrics",
          "8. Deployment: Serve model via API, monitor in production",
          "9. Monitoring: Track performance drift, retrain as needed",
        ],
      },
      {
        title: "No Free Lunch Theorem",
        content:
          "The No Free Lunch (NFL) theorem states that no single machine learning algorithm is universally superior across all possible problems. Averaged over all possible problems, every algorithm performs equally well.",
        keyPoints: [
          "No algorithm is best for all tasks — always experiment",
          "Domain knowledge is critical for choosing the right model",
          "Justifies using ensembles and model comparison",
          "Always use cross-validation to compare models on your specific data",
        ],
      },
    ],
  },
  {
    id: "mathematics",
    title: "Math for ML",
    emoji: "📐",
    color: "blue",
    sections: [
      {
        title: "Linear Algebra Essentials",
        content:
          "Linear algebra is the backbone of machine learning — from representing data as matrices to understanding transformations in neural networks.",
        formulas: [
          {
            name: "Matrix Multiplication",
            latex: "C = A · B,  where C[i,j] = Σ A[i,k] · B[k,j]",
            description: "Product of m×n and n×p matrices yields m×p matrix",
          },
          {
            name: "Dot Product",
            latex: "a · b = Σ aᵢbᵢ = |a||b|cos(θ)",
            description: "Measures similarity; zero means orthogonal vectors",
          },
          {
            name: "Eigendecomposition",
            latex: "Av = λv  →  A = QΛQ⁻¹",
            description:
              "Eigenvectors v scaled by eigenvalues λ; basis for PCA",
          },
          {
            name: "SVD",
            latex: "A = UΣVᵀ",
            description:
              "Singular Value Decomposition: U (left), Σ (singular values), V (right)",
          },
          {
            name: "L2 Norm",
            latex: "||x||₂ = √(Σ xᵢ²)",
            description: "Euclidean distance from origin; used in regularization",
          },
        ],
        keyPoints: [
          "Vectors: direction + magnitude; data points are vectors in feature space",
          "Matrices: transformations; weight matrices in neural nets",
          "Rank: number of linearly independent rows/cols; full rank → invertible",
          "Trace: sum of diagonal elements = sum of eigenvalues",
          "Determinant: volume scaling factor; det=0 means singular (non-invertible)",
        ],
      },
      {
        title: "Calculus & Optimization",
        content:
          "Calculus powers gradient-based optimization, which is how most ML models learn.",
        formulas: [
          {
            name: "Gradient",
            latex: "∇f(x) = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]",
            description: "Vector of partial derivatives; points toward steepest ascent",
          },
          {
            name: "Chain Rule",
            latex: "d/dx[f(g(x))] = f'(g(x)) · g'(x)",
            description: "Foundation of backpropagation in neural networks",
          },
          {
            name: "Gradient Descent Update",
            latex: "θ ← θ - α · ∇L(θ)",
            description: "Update rule: move opposite to gradient by step size α",
          },
          {
            name: "Hessian Matrix",
            latex: "H[i,j] = ∂²f / (∂xᵢ ∂xⱼ)",
            description:
              "Second-order derivatives; describes curvature of loss surface",
          },
          {
            name: "Taylor Expansion (2nd order)",
            latex: "f(x+Δ) ≈ f(x) + ∇f(x)ᵀΔ + ½ΔᵀHΔ",
            description: "Local quadratic approximation of the loss function",
          },
        ],
        keyPoints: [
          "Critical point: ∇f = 0 (could be min, max, or saddle point)",
          "Convex functions have a global minimum — gradient descent guaranteed to converge",
          "Learning rate too high → diverge; too low → slow convergence",
          "Momentum helps escape saddle points and local minima",
          "Second-order methods (Newton's) converge faster but expensive for large models",
        ],
      },
      {
        title: "Probability & Statistics",
        content:
          "Probability theory provides the framework for uncertainty quantification and statistical inference in ML.",
        formulas: [
          {
            name: "Bayes' Theorem",
            latex: "P(A|B) = P(B|A)·P(A) / P(B)",
            description:
              "Posterior = Likelihood × Prior / Evidence; foundation of Bayesian ML",
          },
          {
            name: "Gaussian Distribution",
            latex: "p(x) = (1/√(2πσ²)) · exp(-(x-μ)²/2σ²)",
            description: "Most important distribution; defined by mean μ and std σ",
          },
          {
            name: "Maximum Likelihood Estimation",
            latex: "θ* = argmax_θ Σ log p(xᵢ|θ)",
            description: "Find parameters that maximize log-likelihood of data",
          },
          {
            name: "KL Divergence",
            latex: "KL(P||Q) = Σ P(x) log(P(x)/Q(x))",
            description:
              "Measures how distribution P differs from Q; always ≥ 0",
          },
          {
            name: "Entropy",
            latex: "H(X) = -Σ P(x) log P(x)",
            description:
              "Measure of uncertainty/information; max for uniform distribution",
          },
        ],
        keyPoints: [
          "Central Limit Theorem: sum of i.i.d. random variables → Gaussian",
          "Law of Large Numbers: sample mean → population mean as n→∞",
          "Correlation ≠ Causation: fundamental principle of statistical reasoning",
          "p-value: probability of observed result under null hypothesis",
          "Confidence Interval: range likely to contain true parameter",
        ],
      },
      {
        title: "Information Theory",
        content:
          "Information theory concepts are widely used in ML, from decision trees (information gain) to variational autoencoders (ELBO).",
        formulas: [
          {
            name: "Information Content",
            latex: "I(x) = -log₂ P(x)",
            description: "Surprise/information of event x; rare events have high info",
          },
          {
            name: "Cross-Entropy",
            latex: "H(P, Q) = -Σ P(x) log Q(x)",
            description: "Loss function for classification; equals H(P) + KL(P||Q)",
          },
          {
            name: "Mutual Information",
            latex: "I(X;Y) = H(X) - H(X|Y)",
            description: "Amount of info shared between X and Y; 0 if independent",
          },
        ],
        keyPoints: [
          "Cross-entropy loss is the standard for classification problems",
          "Information gain = entropy reduction; used in decision tree splits",
          "Mutual information measures feature relevance to target variable",
          "ELBO (Evidence Lower Bound) = reconstruction - KL divergence (VAEs)",
        ],
      },
    ],
  },
  {
    id: "supervised",
    title: "Supervised Learning",
    emoji: "🎯",
    color: "green",
    sections: [
      {
        title: "Linear Regression",
        content:
          "Linear regression models the relationship between a dependent variable and one or more independent variables using a linear function.",
        formulas: [
          {
            name: "Model",
            latex: "ŷ = θ₀ + θ₁x₁ + θ₂x₂ + ... + θₙxₙ = θᵀx",
            description: "Linear combination of features with learned weights",
          },
          {
            name: "MSE Loss",
            latex: "L(θ) = (1/n) Σ (yᵢ - ŷᵢ)²",
            description:
              "Mean Squared Error: average squared difference from true values",
          },
          {
            name: "Normal Equation (Closed Form)",
            latex: "θ* = (XᵀX)⁻¹ Xᵀy",
            description:
              "Analytical solution; exact but O(n³) — impractical for large n",
          },
          {
            name: "Gradient Descent Update",
            latex: "θ ← θ - (α/n) Xᵀ(Xθ - y)",
            description: "Iterative update rule for linear regression",
          },
          {
            name: "R² (Coefficient of Determination)",
            latex: "R² = 1 - SS_res/SS_tot = 1 - Σ(yᵢ-ŷᵢ)²/Σ(yᵢ-ȳ)²",
            description:
              "Proportion of variance explained; 1.0 = perfect, 0 = mean-only model",
          },
        ],
        keyPoints: [
          "Assumptions: linearity, independence, homoscedasticity, normality of residuals",
          "Ridge (L2): adds λΣθᵢ² to loss → shrinks coefficients smoothly",
          "Lasso (L1): adds λΣ|θᵢ| to loss → sparse solutions (feature selection)",
          "ElasticNet: combines L1 + L2 regularization",
          "Always standardize features before regularized regression",
        ],
      },
      {
        title: "Logistic Regression",
        content:
          "Despite its name, logistic regression is a classification algorithm that models the probability of a binary outcome using the sigmoid function.",
        formulas: [
          {
            name: "Sigmoid Function",
            latex: "σ(z) = 1 / (1 + e⁻ᶻ),  z = θᵀx",
            description:
              "Squashes output to (0,1); interpreted as probability",
          },
          {
            name: "Binary Cross-Entropy Loss",
            latex: "L = -(1/n) Σ [yᵢ log(ŷᵢ) + (1-yᵢ) log(1-ŷᵢ)]",
            description: "Log loss; minimizing this maximizes likelihood",
          },
          {
            name: "Decision Boundary",
            latex: "θᵀx = 0  →  P(y=1|x) = 0.5",
            description: "Hyperplane separating classes; linear in feature space",
          },
          {
            name: "Odds & Log-Odds",
            latex: "log(p/1-p) = θᵀx",
            description:
              "Log-odds (logit) is linear in features; each θᵢ = change in log-odds",
          },
        ],
        keyPoints: [
          "Outputs probability, not just class label",
          "For multi-class: Softmax replaces sigmoid",
          "Gradient: ∇L = (1/n) Xᵀ(ŷ - y) — same form as linear regression!",
          "Decision threshold default is 0.5; tune based on precision/recall tradeoff",
          "Regularization (C parameter in sklearn) prevents overfitting",
        ],
      },
      {
        title: "Support Vector Machines (SVM)",
        content:
          "SVMs find the maximum-margin hyperplane that best separates classes. They are effective in high-dimensional spaces and with kernel tricks.",
        formulas: [
          {
            name: "Hard-Margin SVM",
            latex: "maximize: 2/||w||  subject to: yᵢ(wᵀxᵢ + b) ≥ 1",
            description:
              "Find widest margin hyperplane; only works for linearly separable data",
          },
          {
            name: "Soft-Margin (Hinge Loss)",
            latex: "L = Σ max(0, 1 - yᵢ(wᵀxᵢ + b)) + λ||w||²",
            description: "Allows misclassifications; controlled by C = 1/λ",
          },
          {
            name: "Kernel Trick (RBF)",
            latex: "K(x,x') = exp(-γ||x-x'||²)",
            description:
              "Maps to infinite-dimensional space implicitly; enables non-linear boundaries",
          },
          {
            name: "Dual Formulation",
            latex: "maximize: Σαᵢ - ½ΣᵢⱼαᵢαⱼyᵢyⱼK(xᵢ,xⱼ)  s.t. 0≤αᵢ≤C",
            description:
              "Dual form; predictions only use support vectors (αᵢ > 0)",
          },
        ],
        keyPoints: [
          "Support vectors: training points on or within the margin",
          "Kernel trick: compute dot products in high-dim space without explicit mapping",
          "Common kernels: Linear, Polynomial, RBF (Gaussian), Sigmoid",
          "C parameter: high C → small margin, low bias; low C → large margin, high bias",
          "γ in RBF: high γ → complex boundary (overfit); low γ → smooth (underfit)",
        ],
      },
      {
        title: "Decision Trees",
        content:
          "Decision trees are hierarchical models that partition feature space by repeatedly splitting on features that best separate the target variable.",
        formulas: [
          {
            name: "Gini Impurity",
            latex: "Gini = 1 - Σ pᵢ² ",
            description:
              "Probability of misclassifying a random sample; 0 = pure node",
          },
          {
            name: "Information Gain (Entropy)",
            latex: "IG = H(parent) - Σ (|child|/|parent|) · H(child)",
            description:
              "Reduction in entropy after split; maximize this for each split",
          },
          {
            name: "Variance Reduction (Regression)",
            latex: "VR = Var(parent) - Σ (|child|/|parent|) · Var(child)",
            description: "Used for regression trees; maximize variance reduction",
          },
        ],
        keyPoints: [
          "Greedy algorithm: locally optimal splits at each node",
          "Depth controls bias-variance; prune to prevent overfitting",
          "Feature importance: total impurity reduction weighted by samples",
          "Handles both numerical and categorical features natively",
          "Non-parametric: no assumptions about data distribution",
          "Axis-aligned splits: boundaries are always perpendicular to feature axes",
        ],
      },
      {
        title: "Ensemble Methods",
        content:
          "Ensemble methods combine multiple models to produce better predictions than any single model. Key insight: combine diverse, moderately accurate models.",
        formulas: [
          {
            name: "Bagging (Bootstrap Aggregating)",
            latex: "ŷ = (1/T) Σ fₜ(x)   [Random Forest]",
            description:
              "Average predictions of T trees trained on bootstrap samples",
          },
          {
            name: "Boosting (AdaBoost)",
            latex: "F(x) = Σ αₜ hₜ(x),  αₜ = ½ ln((1-εₜ)/εₜ)",
            description:
              "Weighted sum of weak learners; α based on error rate εₜ",
          },
          {
            name: "Gradient Boosting",
            latex: "Fₘ(x) = Fₘ₋₁(x) + η · hₘ(x),  hₘ fits residuals -∂L/∂F",
            description:
              "Each tree fits pseudo-residuals (negative gradient of loss)",
          },
        ],
        table: {
          headers: ["Method", "Mechanism", "Bias", "Variance", "Example"],
          rows: [
            ["Bagging", "Parallel, bootstrap", "Same", "Lower", "Random Forest"],
            [
              "Boosting",
              "Sequential, reweighting",
              "Lower",
              "Same",
              "XGBoost, AdaBoost",
            ],
            ["Stacking", "Meta-learner on predictions", "Lower", "Lower", "Blending"],
            ["Voting", "Majority vote / average", "Lower", "Lower", "VotingClassifier"],
          ],
        },
        keyPoints: [
          "Random Forest: uses feature subsampling (√n features per split) for diversity",
          "XGBoost: adds regularization, handles missing values, parallel tree building",
          "LightGBM: leaf-wise growth, faster for large datasets",
          "CatBoost: handles categorical features natively",
          "Early stopping: stop boosting when validation error stops improving",
        ],
      },
      {
        title: "K-Nearest Neighbors (KNN)",
        content:
          "KNN is a non-parametric, instance-based learning algorithm. For classification, it assigns the most common class among the k nearest neighbors.",
        formulas: [
          {
            name: "Euclidean Distance",
            latex: "d(x,x') = √(Σ (xᵢ - x'ᵢ)²)",
            description: "Standard distance metric for continuous features",
          },
          {
            name: "Manhattan Distance",
            latex: "d(x,x') = Σ |xᵢ - x'ᵢ|",
            description: "L1 distance; more robust to outliers",
          },
          {
            name: "Minkowski Distance",
            latex: "d(x,x') = (Σ |xᵢ - x'ᵢ|ᵖ)^(1/p)",
            description: "Generalization: p=1 → Manhattan, p=2 → Euclidean",
          },
        ],
        keyPoints: [
          "No training phase: lazy learner — computation happens at prediction time",
          "Small k: high variance (overfit); large k: high bias (underfit)",
          "Must normalize features: KNN is distance-based",
          "Curse of dimensionality: distances become meaningless in high dims",
          "Time complexity: O(nd) per query; use KD-Trees or Ball Trees for speed",
        ],
      },
      {
        title: "Naive Bayes",
        content:
          "Naive Bayes classifiers apply Bayes' theorem with the 'naive' assumption of conditional independence between features. Despite this strong assumption, they work surprisingly well.",
        formulas: [
          {
            name: "Bayes' Classifier",
            latex: "P(y|x) ∝ P(y) · Π P(xᵢ|y)",
            description:
              "Posterior ∝ Prior × Product of likelihoods (independence assumption)",
          },
          {
            name: "Gaussian NB",
            latex: "P(xᵢ|y) = (1/√(2πσ²)) exp(-(xᵢ-μ)²/2σ²)",
            description: "For continuous features; model each feature as Gaussian",
          },
          {
            name: "Laplace Smoothing",
            latex: "P(xᵢ|y) = (count(xᵢ,y) + α) / (count(y) + α·|V|)",
            description: "Prevents zero probabilities for unseen feature values",
          },
        ],
        keyPoints: [
          "Variants: Gaussian (continuous), Multinomial (counts), Bernoulli (binary)",
          "Very fast to train and predict; scales well with data",
          "Works well for text classification (spam, sentiment)",
          "Feature independence assumption is often violated but model is robust",
          "Good baseline for NLP tasks",
        ],
      },
    ],
  },
  {
    id: "unsupervised",
    title: "Unsupervised Learning",
    emoji: "🔍",
    color: "orange",
    sections: [
      {
        title: "K-Means Clustering",
        content:
          "K-Means partitions n observations into k clusters, where each observation belongs to the cluster with the nearest centroid.",
        formulas: [
          {
            name: "Objective (WCSS)",
            latex: "J = Σₖ Σ_{x∈Cₖ} ||x - μₖ||²",
            description:
              "Within-Cluster Sum of Squares; minimize total inertia",
          },
          {
            name: "Centroid Update",
            latex: "μₖ = (1/|Cₖ|) Σ_{x∈Cₖ} x",
            description: "New centroid = mean of all points assigned to cluster",
          },
          {
            name: "Silhouette Score",
            latex: "s = (b - a) / max(a, b),  s ∈ [-1, 1]",
            description:
              "a=intra-cluster dist, b=nearest-cluster dist; 1=perfect cluster",
          },
        ],
        keyPoints: [
          "Algorithm: 1) Initialize centroids 2) Assign 3) Update 4) Repeat",
          "K-Means++ initialization: choose centroids with probability ∝ distance²",
          "Elbow method: plot WCSS vs k; find the 'elbow' point",
          "Silhouette score: evaluates cluster quality without ground truth",
          "Limitations: spherical clusters, sensitive to outliers, must specify k",
          "K-Medoids: uses actual data points as cluster centers (more robust)",
        ],
      },
      {
        title: "Hierarchical Clustering",
        content:
          "Builds a tree of clusters (dendrogram) by either merging (agglomerative) or splitting (divisive) clusters.",
        formulas: [
          {
            name: "Single Linkage",
            latex: "d(A,B) = min_{a∈A, b∈B} d(a,b)",
            description: "Minimum distance between clusters; tends to create chains",
          },
          {
            name: "Complete Linkage",
            latex: "d(A,B) = max_{a∈A, b∈B} d(a,b)",
            description: "Maximum distance; creates compact, equal-sized clusters",
          },
          {
            name: "Ward's Linkage",
            latex: "Δ(A,B) = ||μ_A - μ_B||² · (|A|·|B|)/(|A|+|B|)",
            description: "Minimizes total within-cluster variance; most common choice",
          },
        ],
        keyPoints: [
          "Agglomerative (bottom-up): start with n clusters, merge iteratively",
          "Divisive (top-down): start with 1 cluster, split iteratively",
          "Dendrogram: tree diagram showing merge/split order",
          "No need to specify k in advance; cut dendrogram at desired level",
          "Time complexity: O(n³) for naive; O(n² log n) for optimized",
        ],
      },
      {
        title: "DBSCAN",
        content:
          "Density-Based Spatial Clustering of Applications with Noise (DBSCAN) groups points in high-density regions and marks outliers as noise.",
        formulas: [
          {
            name: "ε-Neighborhood",
            latex: "Nε(p) = {q ∈ D : d(p,q) ≤ ε}",
            description:
              "Points within distance ε of point p; core point if |Nε(p)| ≥ MinPts",
          },
        ],
        keyPoints: [
          "Core point: has ≥ MinPts neighbors within radius ε",
          "Border point: within ε of a core point but fewer than MinPts neighbors",
          "Noise point: not within ε of any core point",
          "Finds arbitrarily shaped clusters; naturally handles outliers",
          "Parameters: ε (radius) and MinPts (min density) — use k-distance plot for ε",
          "Doesn't require k in advance; scales well with spatial indexing",
        ],
      },
      {
        title: "Principal Component Analysis (PCA)",
        content:
          "PCA finds orthogonal directions of maximum variance in data, enabling dimensionality reduction while preserving as much information as possible.",
        formulas: [
          {
            name: "Covariance Matrix",
            latex: "Σ = (1/n) XᵀX  (centered data)",
            description: "Captures pairwise feature variances and covariances",
          },
          {
            name: "Eigendecomposition",
            latex: "Σv = λv  →  V = [v₁, v₂, ..., vₙ] (principal components)",
            description: "Eigenvectors = directions; eigenvalues = variance explained",
          },
          {
            name: "Projection",
            latex: "Z = XV_k  (project to top-k PCs)",
            description: "Reduce dimensionality by projecting onto top k eigenvectors",
          },
          {
            name: "Explained Variance Ratio",
            latex: "EVR_k = λₖ / Σ λᵢ",
            description:
              "Fraction of total variance captured by k-th component; cumulative EVR guides k selection",
          },
        ],
        keyPoints: [
          "Steps: 1) Center data 2) Compute covariance 3) Eigendecompose 4) Project",
          "Equivalent to SVD: X = UΣVᵀ → principal components = right singular vectors",
          "Choose k components explaining ~95% of variance",
          "PCA assumes linear relationships; Kernel PCA for non-linear",
          "t-SNE and UMAP: better for visualization (non-linear, 2D/3D)",
          "PCA is unsupervised; LDA is supervised dimensionality reduction",
        ],
      },
      {
        title: "Autoencoders",
        content:
          "Autoencoders are neural networks trained to reconstruct their input through a bottleneck (latent space), learning compact representations.",
        formulas: [
          {
            name: "Reconstruction Loss",
            latex: "L = ||x - decoder(encoder(x))||²",
            description:
              "Minimize difference between input and reconstructed output",
          },
          {
            name: "Variational AE (ELBO)",
            latex: "ELBO = E[log p(x|z)] - KL(q(z|x) || p(z))",
            description:
              "Maximize reconstruction likelihood minus KL divergence from prior",
          },
        ],
        keyPoints: [
          "Encoder: compresses input to latent vector z",
          "Decoder: reconstructs input from z",
          "Bottleneck forces learning of essential features",
          "VAE: learns a distribution q(z|x) ≈ N(μ,σ²); enables generation",
          "Denoising AE: trained with corrupted input, clean output",
          "Applications: compression, anomaly detection, generation, pretraining",
        ],
      },
      {
        title: "Gaussian Mixture Models (GMM)",
        content:
          "GMMs model data as a mixture of K Gaussian distributions, providing a probabilistic (soft) clustering approach.",
        formulas: [
          {
            name: "Mixture Model",
            latex: "p(x) = Σₖ πₖ N(x | μₖ, Σₖ)",
            description: "Weighted sum of K Gaussians; πₖ = mixing coefficients",
          },
          {
            name: "E-Step (Responsibility)",
            latex: "rₙₖ = πₖ N(xₙ|μₖ,Σₖ) / Σⱼ πⱼ N(xₙ|μⱼ,Σⱼ)",
            description: "Probability that component k generated point n",
          },
          {
            name: "M-Step Update",
            latex: "μₖ = (Σ rₙₖ xₙ) / (Σ rₙₖ),  Σₖ = (Σ rₙₖ(xₙ-μₖ)(xₙ-μₖ)ᵀ) / Nₖ",
            description: "Update parameters to maximize expected log-likelihood",
          },
        ],
        keyPoints: [
          "EM Algorithm: alternates E-step (soft assignments) and M-step (param update)",
          "Soft clustering: every point has probability of belonging to each cluster",
          "Covariance types: spherical, diagonal, full (most flexible)",
          "BIC/AIC: model selection criteria for choosing number of components",
          "GMM generalizes K-Means (K-Means = GMM with spherical, equal covariances)",
        ],
      },
    ],
  },
  {
    id: "neural_networks",
    title: "Neural Networks",
    emoji: "🕸️",
    color: "purple",
    sections: [
      {
        title: "The Perceptron & MLP",
        content:
          "A neural network consists of layers of interconnected neurons. Each neuron computes a weighted sum of inputs, applies an activation function, and passes the result forward.",
        formulas: [
          {
            name: "Single Neuron",
            latex: "z = wᵀx + b,   a = f(z)",
            description:
              "Pre-activation z, activation a using function f (ReLU, sigmoid, etc.)",
          },
          {
            name: "Layer (Matrix Form)",
            latex: "A⁽ˡ⁾ = f(W⁽ˡ⁾ A⁽ˡ⁻¹⁾ + b⁽ˡ⁾)",
            description:
              "Vectorized forward pass for a fully connected layer l",
          },
          {
            name: "Universal Approximation Theorem",
            latex: "Any continuous function can be approximated by a 1-hidden-layer MLP",
            description:
              "Theoretical guarantee of MLP expressiveness (given enough neurons)",
          },
        ],
        keyPoints: [
          "Input → Hidden Layer(s) → Output Layer",
          "Parameters: weights W and biases b learned via backpropagation",
          "Depth (more layers) > Width (more neurons) for learning hierarchical features",
          "Without activation functions, stacked linear layers collapse to one linear layer",
          "Weight initialization critical: Xavier/Glorot for tanh, He/Kaiming for ReLU",
        ],
      },
      {
        title: "Activation Functions",
        content:
          "Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns.",
        table: {
          headers: ["Function", "Formula", "Range", "Use Case"],
          rows: [
            ["Sigmoid", "1/(1+e⁻ˣ)", "(0,1)", "Binary output, gates"],
            ["Tanh", "(eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)", "(-1,1)", "Hidden layers (RNNs)"],
            ["ReLU", "max(0,x)", "[0,∞)", "Default hidden layer choice"],
            ["Leaky ReLU", "max(0.01x,x)", "(-∞,∞)", "Fix dying ReLU"],
            ["ELU", "x if x>0, α(eˣ-1) if x≤0", "(-α,∞)", "Smooth, negative outputs"],
            ["GELU", "x·Φ(x)", "(-∞,∞)", "Transformers (BERT, GPT)"],
            ["Softmax", "eˣⁱ/Σeˣʲ", "(0,1)", "Multi-class output"],
            ["Swish", "x·σ(x)", "(-∞,∞)", "EfficientNet, mobile nets"],
          ],
        },
        keyPoints: [
          "ReLU: simple, fast, but can 'die' (permanent zero gradient)",
          "Dying ReLU: neurons output 0 for all inputs; solved by Leaky ReLU / PReLU",
          "Vanishing gradient: sigmoid/tanh gradients → 0 for large |x|; prefer ReLU in deep nets",
          "Softmax output: probabilities that sum to 1; use for mutually exclusive classes",
          "GELU: smooth ReLU approximation; default in modern transformers",
        ],
      },
      {
        title: "Backpropagation",
        content:
          "Backpropagation efficiently computes gradients of the loss with respect to all parameters using the chain rule, enabling gradient descent optimization.",
        formulas: [
          {
            name: "Output Layer Delta",
            latex: "δ⁽ᴸ⁾ = ∂L/∂z⁽ᴸ⁾ = (a⁽ᴸ⁾ - y)   [MSE loss]",
            description: "Error signal at output layer",
          },
          {
            name: "Hidden Layer Delta",
            latex: "δ⁽ˡ⁾ = (W⁽ˡ⁺¹⁾)ᵀ δ⁽ˡ⁺¹⁾ ⊙ f'(z⁽ˡ⁾)",
            description: "Backpropagate delta through layer using chain rule",
          },
          {
            name: "Weight Gradient",
            latex: "∂L/∂W⁽ˡ⁾ = δ⁽ˡ⁾ (a⁽ˡ⁻¹⁾)ᵀ",
            description: "Gradient of loss w.r.t. weight matrix of layer l",
          },
          {
            name: "Bias Gradient",
            latex: "∂L/∂b⁽ˡ⁾ = δ⁽ˡ⁾",
            description: "Gradient of loss w.r.t. bias of layer l",
          },
        ],
        keyPoints: [
          "Forward pass: compute activations and store intermediate values",
          "Backward pass: propagate error signals from output to input",
          "Computational graph: autograd systems (PyTorch, TensorFlow) do this automatically",
          "Numerical gradient check: verify analytical gradients (for debugging)",
          "Gradients vanish in deep nets; solved by BatchNorm, skip connections, ReLU",
        ],
      },
      {
        title: "Optimizers",
        content:
          "Optimizers update model parameters to minimize the loss function. Modern optimizers add momentum and adaptive learning rates.",
        formulas: [
          {
            name: "SGD with Momentum",
            latex: "v ← βv - α∇L,   θ ← θ + v",
            description: "Momentum β (typically 0.9) accumulates gradient history",
          },
          {
            name: "RMSProp",
            latex: "s ← βs + (1-β)(∇L)²,   θ ← θ - α∇L/√(s+ε)",
            description: "Adaptive learning rate; scale by RMS of recent gradients",
          },
          {
            name: "Adam",
            latex: "m ← β₁m + (1-β₁)g,  v ← β₂v + (1-β₂)g²,  θ ← θ - α·m̂/√(v̂+ε)",
            description:
              "Adaptive Moment Estimation; combines momentum + RMSProp with bias correction",
          },
          {
            name: "Adam Hyperparameters",
            latex: "β₁=0.9, β₂=0.999, ε=1e-8, α=1e-3 (defaults)",
            description: "Default values work well in practice for most tasks",
          },
        ],
        keyPoints: [
          "SGD: simple but slow; works well with careful tuning and LR schedules",
          "Momentum: overshoots valleys, dampens oscillations across canyons",
          "Adam: fast convergence, adaptive per-parameter LR; may generalize less than SGD",
          "AdamW: Adam + decoupled weight decay; standard for transformers",
          "Learning rate schedulers: step decay, cosine annealing, warm restarts",
          "Gradient clipping: cap gradient norm to prevent exploding gradients (RNNs)",
        ],
      },
      {
        title: "Regularization in Neural Networks",
        content:
          "Regularization techniques prevent overfitting in neural networks by constraining the model's complexity or adding noise.",
        formulas: [
          {
            name: "Dropout",
            latex: "h̃ = h ⊙ m,  mᵢ ~ Bernoulli(p)",
            description:
              "Randomly zero neurons during training; scale by 1/p at test time",
          },
          {
            name: "Batch Normalization",
            latex: "x̂ = (x - μ_B) / √(σ²_B + ε),   y = γx̂ + β",
            description:
              "Normalize layer inputs; γ and β are learned scale and shift",
          },
          {
            name: "L2 Weight Decay",
            latex: "L_total = L + λ Σ ||W||²_F",
            description: "Penalizes large weights; encourages simpler models",
          },
        ],
        keyPoints: [
          "Dropout: p=0.5 for hidden layers, p=0.1-0.2 for input; turned off at test time",
          "BatchNorm: accelerates training, reduces sensitivity to initialization",
          "LayerNorm: normalizes across features per sample; preferred in transformers",
          "Data augmentation: artificially expand training set (flips, crops, rotations)",
          "Early stopping: stop when validation loss starts increasing",
          "Label smoothing: soft targets prevent overconfident predictions",
        ],
      },
    ],
  },
  {
    id: "deep_learning",
    title: "Deep Learning",
    emoji: "🔮",
    color: "pink",
    sections: [
      {
        title: "Convolutional Neural Networks (CNNs)",
        content:
          "CNNs exploit spatial locality and translational invariance through shared-weight convolutional filters, making them ideal for image data.",
        formulas: [
          {
            name: "Convolution Output Size",
            latex: "O = (I - K + 2P) / S + 1",
            description:
              "I=input, K=kernel, P=padding, S=stride; determines feature map size",
          },
          {
            name: "Number of Parameters",
            latex: "Params = (K × K × C_in + 1) × C_out",
            description:
              "K²×C_in weights + 1 bias per filter; shared across all spatial positions",
          },
          {
            name: "Receptive Field",
            latex: "RF_l = RF_{l-1} + (K-1) × Π_{i=1}^{l-1} Sᵢ",
            description: "Region of input that influences a single output neuron",
          },
        ],
        keyPoints: [
          "Conv layer: learnable filters detect local patterns (edges, textures)",
          "Pooling: MaxPool/AvgPool for spatial downsampling and translation invariance",
          "1×1 convolution: channel mixing and dimensionality reduction",
          "Depthwise separable conv: K²×C_in + C_in×C_out params (vs K²×C_in×C_out)",
          "Skip connections (ResNet): gradient highway, enables very deep networks",
          "Architecture: AlexNet→VGG→GoogLeNet→ResNet→DenseNet→EfficientNet",
        ],
        table: {
          headers: ["Architecture", "Key Innovation", "Depth", "Top-1 ImageNet"],
          rows: [
            ["AlexNet (2012)", "Deep CNN, ReLU, Dropout", "8", "63.3%"],
            ["VGG-16 (2014)", "3×3 convolutions, uniform", "16", "74.4%"],
            ["GoogLeNet (2014)", "Inception modules", "22", "74.8%"],
            ["ResNet-50 (2015)", "Residual connections", "50", "76.1%"],
            ["DenseNet-121 (2016)", "Dense connections", "121", "74.9%"],
            ["EfficientNet-B7 (2019)", "Compound scaling", "66", "84.3%"],
          ],
        },
      },
      {
        title: "Recurrent Neural Networks (RNNs)",
        content:
          "RNNs process sequential data by maintaining a hidden state that captures information from previous time steps.",
        formulas: [
          {
            name: "RNN Hidden State",
            latex: "hₜ = tanh(Wₕhₜ₋₁ + Wₓxₜ + b)",
            description: "Hidden state combines previous state and current input",
          },
          {
            name: "LSTM Cell",
            latex: "f=σ(Wf·[h,x]+bf), i=σ(Wi·[h,x]+bi), c̃=tanh(Wc·[h,x]+bc)",
            description: "Forget, input, cell gates control information flow",
          },
          {
            name: "LSTM Output",
            latex: "cₜ = f⊙cₜ₋₁ + i⊙c̃,   hₜ = o⊙tanh(cₜ)",
            description: "Cell state and hidden state updated by gates",
          },
          {
            name: "GRU Update",
            latex: "z=σ(Wz·[h,x]),  r=σ(Wr·[h,x]),  h̃=tanh(W·[r⊙h,x])",
            description: "Simplified LSTM with update and reset gates only",
          },
        ],
        keyPoints: [
          "Vanishing gradient: gradients shrink over long sequences; solved by LSTM/GRU",
          "LSTM: 4 gates (forget, input, cell, output); ~4× more params than vanilla RNN",
          "GRU: 2 gates (update, reset); comparable performance, fewer parameters",
          "Bidirectional RNN: process sequence in both directions for full context",
          "Encoder-Decoder: encode sequence to vector, decode to output sequence",
          "Teacher forcing: feed ground truth as input during training (seq-to-seq)",
        ],
      },
      {
        title: "Attention & Transformers",
        content:
          "The Transformer architecture replaced RNNs for sequence tasks using self-attention, enabling parallel computation and capturing long-range dependencies.",
        formulas: [
          {
            name: "Scaled Dot-Product Attention",
            latex: "Attention(Q,K,V) = softmax(QKᵀ/√dₖ) V",
            description:
              "Queries attend to keys; scale by √dₖ to prevent vanishing gradients",
          },
          {
            name: "Multi-Head Attention",
            latex: "MHA = Concat(head₁,...,headₕ)Wᴼ,  headᵢ = Attention(QWᵢQ, KWᵢK, VWᵢV)",
            description:
              "h parallel attention heads, each with different learned projections",
          },
          {
            name: "Positional Encoding",
            latex: "PE(pos,2i) = sin(pos/10000^(2i/d)),  PE(pos,2i+1) = cos(...)",
            description: "Inject position info since attention is permutation-invariant",
          },
          {
            name: "Transformer Block",
            latex: "x' = LayerNorm(x + MHA(x)),  x'' = LayerNorm(x' + FFN(x'))",
            description: "Add & Norm around attention and feed-forward sublayers",
          },
        ],
        keyPoints: [
          "Self-attention: O(n²) complexity in sequence length; long sequences are expensive",
          "Each head learns different relationship types (syntax, coreference, etc.)",
          "Feed-forward sublayer: 2-layer MLP applied position-wise (d_model → 4d_model → d_model)",
          "BERT: bidirectional, masked language modeling + next sentence prediction",
          "GPT: autoregressive, causal (masked) self-attention, language modeling",
          "ViT: apply transformer to image patches; competitive with CNNs on ImageNet",
          "Efficient attention: Linformer, Longformer, FlashAttention for long contexts",
        ],
      },
      {
        title: "Generative Models",
        content:
          "Generative models learn the underlying data distribution to generate new samples. Key architectures: GANs, VAEs, and Diffusion Models.",
        formulas: [
          {
            name: "GAN Objective",
            latex: "min_G max_D [E[log D(x)] + E[log(1-D(G(z)))]]",
            description:
              "Generator G fools Discriminator D; D maximizes detection accuracy",
          },
          {
            name: "VAE ELBO",
            latex: "ELBO = E_q[log p(x|z)] - KL(q(z|x) || p(z))",
            description:
              "Maximize reconstruction + minimize latent-prior divergence",
          },
          {
            name: "Diffusion Forward Process",
            latex: "q(xₜ|xₜ₋₁) = N(xₜ; √(1-βₜ)xₜ₋₁, βₜI)",
            description: "Gradually add Gaussian noise over T steps",
          },
          {
            name: "Diffusion Reverse (Denoising)",
            latex: "pθ(xₜ₋₁|xₜ) = N(xₜ₋₁; μθ(xₜ,t), Σθ)",
            description: "Learned denoising; neural network predicts noise ε",
          },
        ],
        keyPoints: [
          "GAN issues: mode collapse, training instability, Nash equilibrium not guaranteed",
          "WGAN: uses Wasserstein distance → more stable training, meaningful loss",
          "VAE: continuous latent space, enables interpolation; blurry samples vs GAN",
          "Diffusion models: state-of-the-art quality (DALL-E 2, Stable Diffusion)",
          "Flow-based models: exact likelihood, invertible transformations (RealNVP, Glow)",
          "Evaluation: FID (Fréchet Inception Distance), Inception Score, CLIP score",
        ],
      },
      {
        title: "Transfer Learning & Fine-tuning",
        content:
          "Transfer learning leverages knowledge from pre-trained models on large datasets to improve performance on target tasks with less data.",
        keyPoints: [
          "Feature extraction: freeze pre-trained layers, train only new head",
          "Fine-tuning: unfreeze some/all layers, train with low learning rate",
          "Layer-wise LR decay: lower LR for early layers (more general features)",
          "Domain adaptation: bridge gap between source and target distributions",
          "Zero-shot: GPT/CLIP generalize to unseen tasks without any training",
          "Few-shot: learn from very few (1-5) labeled examples",
          "PEFT: Parameter-Efficient Fine-Tuning (LoRA, Adapters, Prefix Tuning)",
          "LoRA: low-rank decomposition of weight updates → 10-100× fewer trainable params",
        ],
      },
    ],
  },
  {
    id: "evaluation",
    title: "Model Evaluation",
    emoji: "📊",
    color: "teal",
    sections: [
      {
        title: "Classification Metrics",
        content:
          "Choosing the right metric is crucial — accuracy can be misleading on imbalanced datasets.",
        formulas: [
          {
            name: "Accuracy",
            latex: "Accuracy = (TP + TN) / (TP + TN + FP + FN)",
            description: "Overall correct rate; misleading for imbalanced classes",
          },
          {
            name: "Precision",
            latex: "Precision = TP / (TP + FP)",
            description:
              "Of all predicted positive, how many are actually positive",
          },
          {
            name: "Recall (Sensitivity/TPR)",
            latex: "Recall = TP / (TP + FN)",
            description: "Of all actual positives, how many did we capture",
          },
          {
            name: "F1 Score",
            latex: "F1 = 2 · (Precision · Recall) / (Precision + Recall)",
            description: "Harmonic mean of precision and recall",
          },
          {
            name: "AUC-ROC",
            latex: "AUC = P(score(pos) > score(neg))",
            description:
              "Area under ROC curve; 1.0 = perfect, 0.5 = random classifier",
          },
          {
            name: "Matthews Correlation Coefficient",
            latex: "MCC = (TP·TN - FP·FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN))",
            description: "Best single metric for imbalanced binary classification",
          },
        ],
        table: {
          headers: ["Metric", "When to Use", "Range"],
          rows: [
            ["Accuracy", "Balanced classes", "0–1"],
            ["Precision", "FP costly (spam filter)", "0–1"],
            ["Recall", "FN costly (cancer detection)", "0–1"],
            ["F1", "Imbalanced, need balance", "0–1"],
            ["AUC-ROC", "Ranking quality, threshold-free", "0–1"],
            ["AUC-PR", "Highly imbalanced datasets", "0–1"],
            ["MCC", "Best overall binary metric", "-1–1"],
            ["Log Loss", "Probabilistic predictions", "0–∞"],
          ],
        },
      },
      {
        title: "Regression Metrics",
        content:
          "Regression metrics quantify how close predictions are to the true continuous values.",
        formulas: [
          {
            name: "MAE",
            latex: "MAE = (1/n) Σ |yᵢ - ŷᵢ|",
            description: "Mean Absolute Error; robust to outliers",
          },
          {
            name: "MSE & RMSE",
            latex: "MSE = (1/n) Σ (yᵢ - ŷᵢ)²,   RMSE = √MSE",
            description: "Penalizes large errors; RMSE in same units as y",
          },
          {
            name: "MAPE",
            latex: "MAPE = (100/n) Σ |yᵢ - ŷᵢ| / |yᵢ|",
            description:
              "Percentage error; avoid when yᵢ ≈ 0; scale-independent",
          },
          {
            name: "R² Score",
            latex: "R² = 1 - Σ(yᵢ-ŷᵢ)² / Σ(yᵢ-ȳ)²",
            description: "Proportion of variance explained; can be negative (worse than mean)",
          },
          {
            name: "Huber Loss",
            latex: "L_δ = ½(y-ŷ)² if |y-ŷ|≤δ,  else δ(|y-ŷ| - ½δ)",
            description: "MSE for small errors, MAE for large; combines both advantages",
          },
        ],
      },
      {
        title: "Cross-Validation",
        content:
          "Cross-validation provides reliable estimates of model generalization by training and evaluating on different data splits.",
        keyPoints: [
          "K-Fold CV: split data into k folds; train on k-1, test on 1; repeat k times",
          "Stratified K-Fold: preserve class distribution in each fold (imbalanced data)",
          "Leave-One-Out (LOO): k=n; high variance but low bias; computationally expensive",
          "Time Series CV: respect temporal order; never use future data for training",
          "Nested CV: outer loop for model evaluation, inner loop for hyperparameter tuning",
          "Hold-out validation: simple but high variance; use only when data is large",
          "Rule of thumb: use 5-fold or 10-fold CV for most tasks",
        ],
      },
      {
        title: "Hyperparameter Tuning",
        content:
          "Hyperparameters control the learning process and model architecture; they're not learned from data — they must be tuned.",
        keyPoints: [
          "Grid Search: exhaustive search over parameter grid; O(n^k) evaluations",
          "Random Search: randomly sample from distributions; more efficient than grid search",
          "Bayesian Optimization: model the objective function, sample informatively (Optuna)",
          "Hyperband / ASHA: early stopping unpromising configs; fast and efficient",
          "Population-Based Training (PBT): evolve hyperparameters during training",
          "Always tune on validation set; evaluate final model on test set ONCE",
          "Key hyperparameters: learning rate, batch size, regularization strength, architecture depth/width",
        ],
      },
      {
        title: "Learning Curves & Diagnostics",
        content:
          "Learning curves help diagnose underfitting, overfitting, and data sufficiency.",
        keyPoints: [
          "Underfitting: high training AND validation error → more complex model or features",
          "Overfitting: low training error, high validation error → regularization, more data",
          "High variance: training and validation curves diverge → reduce complexity",
          "High bias: both curves plateau at high error → increase capacity",
          "Validation loss increasing: early stopping indicator",
          "More data helps high variance, not high bias",
          "Plot: error vs. training set size to assess data requirements",
        ],
      },
    ],
  },
  {
    id: "feature_engineering",
    title: "Feature Engineering",
    emoji: "⚙️",
    color: "yellow",
    sections: [
      {
        title: "Data Preprocessing",
        content:
          "Raw data must be cleaned and transformed before model training. Garbage in, garbage out.",
        keyPoints: [
          "Missing values: mean/median imputation, KNN imputation, MICE, or drop",
          "Outlier detection: IQR method (1.5×IQR), Z-score (|z|>3), Isolation Forest",
          "Duplicate removal: check for exact and near-duplicate rows",
          "Data type issues: convert strings to numerics, parse dates correctly",
          "Class imbalance: SMOTE (oversample minority), RandomUnderSampler, class_weight",
          "Train-test split: always split BEFORE any preprocessing to prevent data leakage",
        ],
        code: `# Sklearn pipeline example
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

pipe = Pipeline([
  ('imputer', SimpleImputer(strategy='median')),
  ('scaler', StandardScaler()),
  ('model', RandomForestClassifier())
])`,
      },
      {
        title: "Feature Scaling",
        content:
          "Scaling ensures features contribute equally to distance-based and gradient-based algorithms.",
        formulas: [
          {
            name: "Standard Scaling (Z-score)",
            latex: "x' = (x - μ) / σ",
            description: "Zero mean, unit variance; required for PCA, SVM, neural nets",
          },
          {
            name: "Min-Max Scaling",
            latex: "x' = (x - x_min) / (x_max - x_min)",
            description: "Maps to [0,1]; sensitive to outliers",
          },
          {
            name: "Robust Scaling",
            latex: "x' = (x - Q₂) / (Q₃ - Q₁)",
            description: "Uses median and IQR; robust to outliers",
          },
          {
            name: "Log Transform",
            latex: "x' = log(x + 1)",
            description: "Reduces skewness; use for right-skewed positive features",
          },
        ],
        keyPoints: [
          "Always fit scaler on training data only, then transform train and test",
          "Tree-based models (RF, XGBoost): don't need scaling",
          "Distance-based (KNN, SVM, KMeans): require scaling",
          "Neural networks: scale inputs, usually to [-1,1] or [0,1]",
        ],
      },
      {
        title: "Feature Encoding",
        content:
          "Categorical variables must be encoded numerically for most ML algorithms.",
        table: {
          headers: ["Method", "When to Use", "Output Dims", "Notes"],
          rows: [
            ["Label Encoding", "Ordinal categories, tree models", "1", "Implies ordering!"],
            ["One-Hot Encoding", "Nominal, low cardinality", "C", "Avoid dummy trap"],
            ["Target Encoding", "High cardinality", "1", "Risk of leakage"],
            ["Frequency Encoding", "High cardinality", "1", "Frequency as feature"],
            ["Binary Encoding", "Medium-high cardinality", "log₂C", "Compact"],
            ["Embeddings", "NLP, high cardinality", "d", "Learned representations"],
          ],
        },
        keyPoints: [
          "One-hot encoding: creates C binary columns for C categories",
          "Target encoding: replace category with mean target value; use k-fold to prevent leakage",
          "High cardinality: categories with 100s-1000s of values; use target/embedding encoding",
          "Ordinal encoding: only when there's a natural order (cold < warm < hot)",
        ],
      },
      {
        title: "Feature Selection",
        content:
          "Feature selection reduces dimensionality, prevents overfitting, and improves training speed by removing irrelevant/redundant features.",
        keyPoints: [
          "Filter methods: statistical tests (χ², F-test, mutual info) — model-independent",
          "Wrapper methods: RFE (Recursive Feature Elimination) — use model performance",
          "Embedded methods: LASSO (L1), tree feature importance — built into training",
          "Correlation matrix: remove features with |corr| > 0.9 (multicollinearity)",
          "VIF (Variance Inflation Factor): VIF > 10 indicates multicollinearity",
          "SHAP values: model-agnostic, provides feature importance with direction",
          "Permutation importance: measure accuracy drop when feature is randomly shuffled",
        ],
      },
      {
        title: "Feature Creation",
        content:
          "Creating new features from existing ones often has the highest impact on model performance.",
        keyPoints: [
          "Interaction features: x₁ × x₂ captures multiplicative relationships",
          "Polynomial features: x², x³ — but beware of dimensionality explosion",
          "Date/time features: extract hour, day, month, season, is_weekend",
          "Aggregation features: user-level statistics (mean, max, std, count)",
          "Lag features: x(t-1), x(t-2) for time series problems",
          "Ratio features: price/area, revenue/users — normalize by relevant quantity",
          "Text features: TF-IDF, n-grams, word embeddings, sentence BERT",
          "Domain knowledge is the most powerful feature engineering tool",
        ],
      },
    ],
  },
  {
    id: "nlp",
    title: "NLP & Text",
    emoji: "💬",
    color: "cyan",
    sections: [
      {
        title: "Text Preprocessing",
        content:
          "Raw text must be cleaned and normalized before ML models can process it.",
        keyPoints: [
          "Tokenization: split text into words/subwords/characters",
          "Lowercasing: reduce vocabulary size (may lose casing info)",
          "Stop word removal: remove common words (the, is, at) — may hurt with transformers",
          "Stemming: reduce to root form (running → run) — crude, language-dependent",
          "Lemmatization: dictionary-based root form (better → good) — slower but accurate",
          "Punctuation & special char handling: context-dependent",
          "Subword tokenization: BPE, WordPiece (BERT), SentencePiece (T5) — handles OOV",
        ],
      },
      {
        title: "Text Representations",
        content:
          "Converting text to numerical vectors is the central challenge in NLP.",
        formulas: [
          {
            name: "TF-IDF",
            latex: "TF-IDF(t,d) = TF(t,d) × IDF(t) = (f_{t,d}/Σf) × log(N/df_t)",
            description: "Term frequency weighted by inverse document frequency",
          },
          {
            name: "Word2Vec (Skip-gram)",
            latex: "maximize: Σ log P(wₒ|wᵢ) = log σ(vₒᵀvᵢ) + Σ log σ(-vₙᵀvᵢ)",
            description: "Predict context words from center word; learns word embeddings",
          },
          {
            name: "Cosine Similarity",
            latex: "cos(A,B) = (A·B) / (||A|| ||B||)",
            description: "Semantic similarity between embedding vectors; 1=identical, 0=orthogonal",
          },
        ],
        table: {
          headers: ["Method", "Type", "Captures Semantics", "Context-aware"],
          rows: [
            ["BoW", "Count vector", "No", "No"],
            ["TF-IDF", "Weighted count", "Partial", "No"],
            ["Word2Vec", "Dense embedding", "Yes", "No"],
            ["GloVe", "Dense embedding", "Yes", "No"],
            ["FastText", "Subword embedding", "Yes", "No"],
            ["ELMo", "Contextualized", "Yes", "Yes (BiLSTM)"],
            ["BERT", "Contextualized", "Yes", "Yes (Transformer)"],
          ],
        },
      },
      {
        title: "NLP Tasks & Models",
        content:
          "NLP encompasses a wide range of tasks, each with specialized architectures.",
        keyPoints: [
          "Text Classification: BERT fine-tuning → sentiment, topic, intent",
          "NER: Named Entity Recognition → CRF, BiLSTM-CRF, BERT + token classification",
          "Machine Translation: Seq2Seq + Attention, Transformer (original paper use case)",
          "Summarization: extractive (select sentences) vs abstractive (generate new text)",
          "QA: extractive QA (SQuAD), generative QA (RAG), closed-book (T5, GPT)",
          "Language Modeling: causal (GPT) vs masked (BERT) pretraining objectives",
          "Embeddings: sentence-transformers for semantic search, clustering",
          "RAG (Retrieval-Augmented Generation): retrieve docs + generate conditioned on them",
        ],
      },
      {
        title: "Large Language Models (LLMs)",
        content:
          "LLMs are transformer-based models trained on massive text corpora, exhibiting emergent capabilities at scale.",
        keyPoints: [
          "Scaling laws: loss ∝ N^(-α) × D^(-β) — compute optimal training: C ≈ 6ND",
          "Emergent abilities: appear at scale thresholds (few-shot, chain-of-thought)",
          "Instruction tuning: fine-tune on (instruction, response) pairs for alignment",
          "RLHF: Reinforcement Learning from Human Feedback (InstructGPT, ChatGPT)",
          "DPO: Direct Preference Optimization — simpler alternative to RLHF",
          "Chain-of-thought (CoT): prompting with reasoning steps dramatically improves accuracy",
          "RAG: combine retrieval with generation for factual, up-to-date answers",
          "Hallucination: LLMs generate confident but false information — major challenge",
          "Context window: tokens model can process at once (4K → 1M+ tokens)",
        ],
      },
    ],
  },
  {
    id: "reinforcement",
    title: "Reinforcement Learning",
    emoji: "🎮",
    color: "red",
    sections: [
      {
        title: "RL Fundamentals",
        content:
          "Reinforcement Learning trains an agent to make sequences of decisions by maximizing cumulative reward through interaction with an environment.",
        formulas: [
          {
            name: "Return (Discounted Reward)",
            latex: "Gₜ = Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + ... = Σ γᵏRₜ₊ₖ₊₁",
            description: "Sum of future rewards; γ∈[0,1] discounts future rewards",
          },
          {
            name: "State Value Function",
            latex: "V^π(s) = E_π[Gₜ | Sₜ=s]",
            description: "Expected return from state s following policy π",
          },
          {
            name: "Action Value (Q) Function",
            latex: "Q^π(s,a) = E_π[Gₜ | Sₜ=s, Aₜ=a]",
            description: "Expected return from state s, taking action a, then following π",
          },
          {
            name: "Bellman Equation",
            latex: "V^π(s) = Σₐ π(a|s) Σₛ' P(s'|s,a) [R(s,a,s') + γV^π(s')]",
            description: "Recursive relationship between state values",
          },
          {
            name: "Optimal Bellman (Q*)",
            latex: "Q*(s,a) = R(s,a) + γ Σₛ' P(s'|s,a) max_a' Q*(s',a')",
            description: "Optimal Q-function; greedy policy: π*(s) = argmax_a Q*(s,a)",
          },
        ],
        keyPoints: [
          "MDP: (States, Actions, Transition, Reward, Discount) — RL formalism",
          "Policy π(a|s): probability of action a in state s",
          "Exploration-exploitation tradeoff: ε-greedy, UCB, Thompson Sampling",
          "Model-free: learn directly from interaction (Q-learning, Policy Gradient)",
          "Model-based: learn environment dynamics, then plan (Dyna, AlphaZero)",
        ],
      },
      {
        title: "Key RL Algorithms",
        content:
          "RL algorithms range from tabular methods to deep RL approaches that handle continuous state/action spaces.",
        formulas: [
          {
            name: "Q-Learning Update",
            latex: "Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') - Q(s,a)]",
            description: "Off-policy TD; converges to Q* for tabular case",
          },
          {
            name: "SARSA Update",
            latex: "Q(s,a) ← Q(s,a) + α[r + γQ(s',a') - Q(s,a)]",
            description: "On-policy TD; uses actual next action a' (not max)",
          },
          {
            name: "Policy Gradient (REINFORCE)",
            latex: "∇J(θ) = E_π[Gₜ ∇log π_θ(aₜ|sₜ)]",
            description: "Gradient ascent on expected return; high variance",
          },
          {
            name: "Actor-Critic (A2C/A3C)",
            latex: "∇J(θ) = E[A(s,a) ∇log π_θ(a|s)],  A(s,a) = Q(s,a) - V(s)",
            description: "Use advantage A to reduce variance; critic estimates V(s)",
          },
          {
            name: "PPO Clip Objective",
            latex: "L = E[min(rₜ(θ)Âₜ, clip(rₜ, 1-ε, 1+ε)Âₜ)],  rₜ=π_θ/π_θold",
            description:
              "Clips policy ratio to prevent too-large updates; stable training",
          },
        ],
        keyPoints: [
          "DQN: Q-learning + neural net + experience replay + target network",
          "Double DQN: separate networks for selection and evaluation of actions",
          "Dueling DQN: separate V(s) and A(s,a) streams → better value estimates",
          "PPO: most popular policy gradient; used in ChatGPT RLHF training",
          "SAC: Soft Actor-Critic; maximum entropy RL; sample efficient, continuous actions",
          "TD3: Twin Delayed DDPG; addresses overestimation bias in continuous action spaces",
        ],
      },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Production",
    emoji: "🚀",
    color: "indigo",
    sections: [
      {
        title: "MLOps Overview",
        content:
          "MLOps (Machine Learning Operations) bridges the gap between ML experimentation and production deployment, ensuring models are reliable, scalable, and maintainable.",
        keyPoints: [
          "Data versioning: DVC, LakeFS — track datasets like code",
          "Experiment tracking: MLflow, Weights & Biases, Neptune",
          "Model registry: centralized store for trained models with versioning",
          "CI/CD for ML: automated testing, training pipelines, deployment",
          "Feature stores: Feast, Tecton — consistent features between training and serving",
          "Model serving: REST API (FastAPI), gRPC, TensorFlow Serving, Triton",
          "Containerization: Docker + Kubernetes for scalable deployment",
          "A/B testing: compare model versions on live traffic",
        ],
      },
      {
        title: "Data Drift & Model Monitoring",
        content:
          "Models degrade over time as the real world changes. Monitoring detects these issues early.",
        formulas: [
          {
            name: "Population Stability Index (PSI)",
            latex: "PSI = Σ (Actual% - Expected%) × ln(Actual%/Expected%)",
            description: "PSI < 0.1: stable; 0.1-0.2: slight shift; > 0.2: major drift",
          },
          {
            name: "KL Divergence (Distribution Shift)",
            latex: "KL(P||Q) = Σ P(x) log(P(x)/Q(x))",
            description: "Measures how current data distribution differs from training",
          },
        ],
        keyPoints: [
          "Data drift: input features distribution changes (covariate shift)",
          "Concept drift: relationship between X and y changes",
          "Label drift: target variable distribution changes",
          "Monitor: prediction distributions, feature statistics, model performance",
          "Statistical tests: KS test, Chi-squared test, MMD for drift detection",
          "Alerts: trigger retraining when drift exceeds threshold",
          "Shadow mode: run new model alongside old, compare outputs before promoting",
        ],
      },
      {
        title: "Model Deployment Patterns",
        content:
          "Different deployment strategies balance risk, performance, and infrastructure complexity.",
        table: {
          headers: ["Pattern", "Description", "Use Case", "Risk"],
          rows: [
            [
              "Batch inference",
              "Predictions on stored data",
              "Reports, recommendations",
              "Low",
            ],
            [
              "Real-time API",
              "Synchronous predictions",
              "Fraud detection, pricing",
              "Medium",
            ],
            [
              "Streaming",
              "Continuous prediction stream",
              "IoT, click-stream",
              "Medium",
            ],
            [
              "Edge deployment",
              "On-device inference",
              "Mobile, IoT",
              "High",
            ],
            [
              "Canary release",
              "Gradual traffic shift",
              "Safe rollout",
              "Low",
            ],
            [
              "Shadow mode",
              "Parallel run, no traffic",
              "Model validation",
              "Very Low",
            ],
          ],
        },
        keyPoints: [
          "Model compression: quantization (INT8), pruning, knowledge distillation",
          "ONNX: interoperable model format across frameworks",
          "TensorRT: NVIDIA optimized inference engine",
          "Model latency: p50, p95, p99 percentiles matter for SLAs",
          "Throughput: requests per second under load",
          "Feature engineering latency: often bottleneck in production systems",
        ],
      },
      {
        title: "ML System Design",
        content:
          "Building end-to-end ML systems requires careful design of data pipelines, training infrastructure, and serving systems.",
        keyPoints: [
          "Data flywheel: more users → more data → better model → more users",
          "Training data pipeline: collection, labeling, validation, versioning",
          "Feature pipeline: compute, store, serve features consistently",
          "Training pipeline: distributed training, hyperparameter tuning, evaluation",
          "Serving pipeline: preprocessing → inference → postprocessing",
          "Feedback loop: collect model predictions and outcomes for retraining",
          "Human-in-the-loop: active learning, labeling, quality control",
          "Always define success metrics before building the system",
        ],
      },
    ],
  },
  {
    id: "explainability",
    title: "Explainability & Ethics",
    emoji: "⚖️",
    color: "amber",
    sections: [
      {
        title: "Model Interpretability",
        content:
          "Understanding why a model makes predictions is critical for trust, debugging, and regulatory compliance.",
        formulas: [
          {
            name: "SHAP Value",
            latex: "φᵢ = Σ_{S⊆F\\{i}} |S|!(|F|-|S|-1)!/|F|! [f(S∪{i}) - f(S)]",
            description:
              "Shapley value: average marginal contribution of feature i over all coalitions",
          },
          {
            name: "LIME Local Model",
            latex: "ξ(x) = argmin_{g∈G} L(f, g, πₓ) + Ω(g)",
            description:
              "Fit interpretable local model g around instance x using weighted samples",
          },
        ],
        keyPoints: [
          "Intrinsic interpretability: linear models, decision trees, logistic regression",
          "Post-hoc global: feature importance, PDP (Partial Dependence Plot), ICE plots",
          "Post-hoc local: LIME (Local Interpretable Model-agnostic Explanations), SHAP",
          "SHAP: game-theoretic, consistent, can explain individual predictions",
          "LIME: fit local linear model around prediction point",
          "Attention weights: NOT reliable explanations in transformers",
          "Counterfactual: 'what if' — what minimal change would change the prediction?",
        ],
      },
      {
        title: "ML Fairness & Bias",
        content:
          "ML models can perpetuate and amplify societal biases if not carefully designed and evaluated.",
        keyPoints: [
          "Historical bias: biased training data leads to biased models",
          "Representation bias: underrepresented groups → poor performance for them",
          "Measurement bias: proxy variables may encode protected attributes",
          "Demographic parity: equal positive prediction rates across groups",
          "Equal opportunity: equal TPR (recall) across protected groups",
          "Individual fairness: similar individuals treated similarly",
          "Fairness-accuracy tradeoff: often impossible to satisfy all fairness criteria simultaneously (Impossibility theorem)",
          "Fairness-aware algorithms: reweighting, adversarial debiasing, calibrated equalized odds",
          "Audit tools: Fairlearn, AI Fairness 360 (IBM), What-If Tool (Google)",
        ],
      },
      {
        title: "Privacy-Preserving ML",
        content:
          "Protecting individual privacy while training useful ML models is increasingly important.",
        keyPoints: [
          "Differential Privacy (DP): add calibrated noise so individual records can't be identified",
          "ε-DP: privacy budget; smaller ε = more privacy, less utility",
          "Federated Learning: train on distributed data without sharing raw data",
          "Secure Multi-Party Computation: compute on encrypted data",
          "Homomorphic Encryption: inference on encrypted data",
          "Data anonymization: k-anonymity, l-diversity, t-closeness",
          "Model inversion attacks: can recover training data from model outputs",
          "Membership inference: can determine if a record was in the training set",
        ],
      },
    ],
  },
  {
    id: "tips_tricks",
    title: "Tips & Best Practices",
    emoji: "💡",
    color: "lime",
    sections: [
      {
        title: "Practical ML Checklist",
        content:
          "A battle-tested workflow for tackling ML problems from scratch.",
        keyPoints: [
          "1. Understand the business problem and define success metrics",
          "2. Explore data: distributions, correlations, missing values, outliers (EDA)",
          "3. Establish a simple baseline (mean prediction, logistic regression)",
          "4. Prevent data leakage: split BEFORE preprocessing",
          "5. Start simple, add complexity only if needed",
          "6. Use cross-validation for reliable performance estimates",
          "7. Plot learning curves to diagnose bias/variance",
          "8. Feature importance analysis after training",
          "9. Error analysis: examine misclassified/high-error examples",
          "10. Ensemble if compute allows: usually 1-2% improvement",
          "11. Monitor for data drift in production",
          "12. Document experiments, data, and decisions",
        ],
      },
      {
        title: "Common Mistakes to Avoid",
        content:
          "These mistakes are common traps that can invalidate your entire ML experiment.",
        keyPoints: [
          "🚫 Data leakage: using future/test data info during training",
          "🚫 Wrong metric: optimizing accuracy on imbalanced classes",
          "🚫 Not baseline-ing: jumping to complex models without a baseline",
          "🚫 Overfitting to test set: evaluating too many times on test data",
          "🚫 Ignoring class imbalance: training without class weights / resampling",
          "🚫 Feature scaling before split: fitting scaler on full dataset",
          "🚫 Multicollinearity: correlated features can hurt some models",
          "🚫 Treating categorical ordinals as nominal (or vice versa)",
          "🚫 p-hacking: running many tests and reporting only significant ones",
          "🚫 Ignoring confidence intervals: reporting a single number without uncertainty",
          "🚫 Not version-controlling data and models",
          "🚫 Deploying without monitoring: model performance will degrade",
        ],
      },
      {
        title: "Algorithm Selection Guide",
        content:
          "Choosing the right algorithm based on your data characteristics and constraints.",
        table: {
          headers: ["Situation", "Recommended Algorithms"],
          rows: [
            ["Small tabular data (<10K)", "Logistic/Linear Regression, SVM, KNN"],
            [
              "Large tabular data (>10K)",
              "XGBoost, LightGBM, Random Forest",
            ],
            [
              "Imbalanced classification",
              "XGBoost + class_weight, SMOTE + RF",
            ],
            [
              "Image classification",
              "ResNet, EfficientNet, ViT (pretrained)",
            ],
            [
              "Text classification",
              "BERT fine-tune, distilBERT, fastText",
            ],
            [
              "Time series forecasting",
              "LSTM, Transformer, LightGBM + lags",
            ],
            [
              "Anomaly detection",
              "Isolation Forest, Autoencoder, LOF",
            ],
            ["Clustering", "K-Means, DBSCAN, GMM"],
            ["Recommendation", "Matrix Factorization, NCF, BERT4Rec"],
            [
              "NLP generation",
              "GPT-2/3/4, T5, BART (fine-tuned)",
            ],
            [
              "Low latency needed",
              "Linear models, shallow trees, quantized NNs",
            ],
            [
              "Interpretability needed",
              "Logistic Regression, Decision Tree, SHAP+XGBoost",
            ],
          ],
        },
      },
      {
        title: "Key Python Libraries",
        content: "Essential Python ecosystem for machine learning practitioners.",
        table: {
          headers: ["Library", "Purpose", "Key Features"],
          rows: [
            ["scikit-learn", "Classical ML", "Unified API, pipelines, preprocessing"],
            ["XGBoost/LightGBM", "Gradient boosting", "Fast, regularized, handles missing"],
            ["PyTorch", "Deep learning", "Dynamic graphs, research-friendly"],
            ["TensorFlow/Keras", "Deep learning", "Production-ready, TFLite, TF Serving"],
            ["HuggingFace", "NLP/LLMs", "1000s of pretrained models, datasets"],
            ["pandas", "Data manipulation", "DataFrames, groupby, merge, time series"],
            ["numpy", "Numerical computing", "Arrays, linear algebra, broadcasting"],
            ["matplotlib/seaborn", "Visualization", "Plots, statistical charts"],
            ["SHAP", "Explainability", "Shapley values, feature importance plots"],
            ["Optuna", "Hyperparameter tuning", "Bayesian optimization, pruning"],
            ["MLflow", "Experiment tracking", "Logging, model registry, deployment"],
            ["Weights & Biases", "Experiment tracking", "Collaboration, dashboards, sweeps"],
          ],
        },
      },
    ],
  },
];
