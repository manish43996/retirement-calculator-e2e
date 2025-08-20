# 🧮 Retirement Savings Calculator — Automated Test Suite

This project contains **automated UI tests** for **Securian’s public-facing Retirement Savings Calculator** web application. The tests are written in **JavaScript (ES6)** using **WebdriverIO**.

The goal is to verify the calculator behaves correctly for given **input values** and **acceptance criteria**.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone git@github.com:manish43996/retirement-calculator-e2e.git
cd retirement-calculator-e2e
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the tests

```bash
npx wdio run wdio.conf.js
```

---

## 🧪 Test Scenarios

| # | Scenario                              | Description                                                                                                                |
| - | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Form Submission (Required Fields)** | Fill only the mandatory fields (e.g., *Current Age*, *Retirement Age*, *Current Income*) and verify successful submission. |
| 2 | **Social Security Benefits Toggle**   | Enable the **Social Security** toggle → extra fields appear; disable it → extra fields are hidden.                         |
| 3 | **Submit with All Fields**            | Fill in **all fields** using sample data and verify successful submission.                                                 |
| 4 | **Update Default Calculator Values**  | Change defaults (e.g., retirement contribution %, inflation toggle) and verify updates persist in results.                 |
| 5 | **Validation Handling**               | Submit invalid data (e.g., *Current Age > Retirement Age*) and verify the error message appears.                           |

---

## 📊 Sample Test Data

| Field                                 | Value     |
| ------------------------------------- | --------- |
| Current Age                           | 40        |
| Retirement Age                        | 68        |
| Current Annual Income                 | 100,000   |
| Spouse’s Annual Income                | 75,000    |
| Current Retirement Savings            | 5,000,000 |
| Current Retirement Contribution       | 10%       |
| Annual Contribution Increase          | 0.25%     |
| Social Security Income                | Yes       |
| Relationship Status                   | Married   |
| Social Security Override              | 4,000     |
| Additional/Other Income               | 500       |
| Number of Years Retirement to Last    | 20        |
| Post-Retirement Increase w/ Inflation | Yes       |
| Percent of Final Income Desired       | 75%       |
| Pre-Retirement Investment Return      | 8%        |
| Post-Retirement Investment Return     | 5%        |

---

## ✅ Acceptance Criteria Covered

* [x] Submit with required fields
* [x] Social Security toggle functionality
* [x] Submit with all fields
* [x] Update default calculator values

---

## 📂 Project Structure

```plaintext
retirement-calculator-e2e/
│── README.md
├─ package.json
├─ tsconfig.json
├─ wdio.conf.ts
├─ src/
│ ├─ pages/
│ │ └─ Calculator.page.ts
│ ├─ data/
│ │ └─ sampleData.ts
│ └─ helpers/
│ └─ form.ts
└─ test/
   └─ e2e/
      ├─ tc01_required-only.e2e.ts
      ├─ tc02_ss-toggle.e2e.ts
      ├─ tc03_all-fields.e2e.ts
      └─ tc04_update-defaults.e2e.ts
```

---

## 🚀 Tech Stack

* **Language:** JavaScript (ES6)
* **Testing Framework:** WebdriverIO
* **Assertion Library:** Chai
* **Runner:** Mocha
