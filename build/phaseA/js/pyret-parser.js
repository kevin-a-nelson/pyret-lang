define(['../../../lib/jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "end": [],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name",
        "import-string"
      ],
      "import-stmt_I2_star": [
        "ε",
        "import-stmt_I2"
      ],
      "import-stmt_I2": [],
      "import-special": [],
      "import-name": [],
      "import-string": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "toplevel-binding": [
        "binding"
      ],
      "binop-expr": [
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binding": [],
      "binding_I0_opt": [
        "ε",
        "binding_I0"
      ],
      "binding_I2_opt": [
        "ε",
        "binding_I2"
      ],
      "binding_I0": [],
      "binding_I2": [],
      "multi-let-expr": [],
      "multi-let-expr_I1_star": [
        "ε",
        "multi-let-expr_I1",
        "let-binding-elt"
      ],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I1": [
        "let-binding-elt"
      ],
      "let-binding-elt": [],
      "letrec-expr": [],
      "letrec-expr_I1_star": [
        "ε",
        "letrec-expr_I1",
        "letrec-binding"
      ],
      "letrec-expr_I1": [
        "letrec-binding"
      ],
      "letrec-binding": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-bind-elt": [],
      "type-let-expr": [],
      "type-let-expr_I1_star": [
        "ε",
        "type-let-expr_I1",
        "type-let-bind-elt"
      ],
      "type-let-expr_I1": [
        "type-let-bind-elt"
      ],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I1_star": [
        "ε",
        "ty-params_I0_I1",
        "list-ty-param"
      ],
      "ty-params_I0_I3": [],
      "ty-params_I0_I1": [
        "list-ty-param"
      ],
      "list-ty-param": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding"
      ],
      "args_I1": [
        "binding"
      ],
      "args_I1_I0_star": [
        "ε",
        "args_I1_I0",
        "list-arg-elt"
      ],
      "args_I1_I0": [
        "list-arg-elt"
      ],
      "list-arg-elt": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding"
      ],
      "variant-members_I1_I0_star": [
        "ε",
        "variant-members_I1_I0",
        "list-variant-member"
      ],
      "variant-member": [
        "binding"
      ],
      "variant-members_I1_I0": [
        "list-variant-member"
      ],
      "list-variant-member": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "id-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "dot-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "bad-expr": [],
      "num-expr": [],
      "frac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "binop-expr-commas": [],
      "app-args": [],
      "app-args_I1_opt": [
        "ε",
        "app-args_I1",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "app-args_I1": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "app-args_I1_I0_star": [
        "ε",
        "app-args_I1_I0",
        "binop-expr-commas"
      ],
      "app-args_I1_I0": [
        "binop-expr-commas"
      ],
      "inst-expr_I2_star": [
        "ε",
        "inst-expr_I2",
        "inst-elt"
      ],
      "inst-expr_I2": [
        "inst-elt"
      ],
      "inst-elt": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-fields_I0_star": [
        "ε",
        "obj-fields_I0",
        "list-obj-field"
      ],
      "obj-field": [],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I0": [
        "list-obj-field"
      ],
      "list-obj-field": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "fields_I0_star": [
        "ε",
        "fields_I0",
        "list-field"
      ],
      "field": [],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I0": [
        "list-field"
      ],
      "list-field": [],
      "fields_I2": [],
      "construct-modifier": [
        "ε"
      ],
      "construct-expr_I4_opt": [
        "ε",
        "construct-expr_I4",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "construct-expr_I4": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "construct-expr_I4_I0_star": [
        "ε",
        "construct-expr_I4_I0",
        "binop-expr-commas"
      ],
      "construct-expr_I4_I0": [
        "binop-expr-commas"
      ],
      "bracket-expr": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1_star": [
        "ε",
        "if-pipe-expr_I1",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I2_opt": [
        "ε",
        "if-pipe-expr_I2"
      ],
      "if-pipe-expr_I1": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I2": [],
      "cases-binding": [
        "binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "list-cases-arg-elt": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding"
      ],
      "cases-args_I1_I0_star": [
        "ε",
        "cases-args_I1_I0",
        "list-cases-arg-elt"
      ],
      "cases-args_I1_I0": [
        "list-cases-arg-elt"
      ],
      "cases-expr_I1": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-bind-elt": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I0_star": [
        "ε",
        "for-expr_I3_I0",
        "for-bind-elt"
      ],
      "for-expr_I3_I0": [
        "for-bind-elt"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "record-ann_I1_opt": [
        "ε",
        "record-ann_I1",
        "ann-field"
      ],
      "record-ann_I1": [
        "ann-field"
      ],
      "record-ann_I1_I0_star": [
        "ε",
        "record-ann_I1_I0",
        "list-ann-field"
      ],
      "ann-field": [],
      "record-ann_I1_I0": [
        "list-ann-field"
      ],
      "list-ann-field": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "noparen-arrow-ann_I0": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "noparen-arrow-ann_I0_I0_star": [
        "ε",
        "noparen-arrow-ann_I0_I0",
        "arrow-ann-elt"
      ],
      "noparen-arrow-ann_I0_I0": [
        "arrow-ann-elt"
      ],
      "arrow-ann-elt": [],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "arrow-ann_I1": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann"
      ],
      "arrow-ann_I1_I0_star": [
        "ε",
        "arrow-ann_I1_I0",
        "arrow-ann-elt"
      ],
      "arrow-ann_I1_I0": [
        "arrow-ann-elt"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "app-ann_I2_star": [
        "ε",
        "app-ann_I2",
        "app-ann-elt"
      ],
      "app-ann_I2": [
        "app-ann-elt"
      ],
      "app-ann-elt": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "dot-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "end",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "2": {
        "name": "end",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "3": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "4": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "5": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "6": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "7": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "8": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "9": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "10": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "11": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "12": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "15": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "import-stmt_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "16": {
        "name": "import-stmt_I2_star",
        "position": 0,
        "symbols": []
      },
      "17": {
        "name": "import-stmt_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "import-stmt_I2"
          }
        ]
      },
      "18": {
        "name": "import-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "19": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "20": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "21": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-string"
          }
        ]
      },
      "22": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "23": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "24": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "25": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "26": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "27": {
        "name": "import-string",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "28": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "29": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "30": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "31": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "32": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "33": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "34": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "35": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "45": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "46": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "47": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "48": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "49": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "50": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "51": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "binding_I2_opt"
          }
        ]
      },
      "52": {
        "name": "binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "53": {
        "name": "binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I0"
          }
        ]
      },
      "54": {
        "name": "binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "55": {
        "name": "binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "56": {
        "name": "binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I2"
          }
        ]
      },
      "57": {
        "name": "binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "58": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "59": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "60": {
        "name": "multi-let-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "61": {
        "name": "multi-let-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1"
          }
        ]
      },
      "62": {
        "name": "multi-let-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-binding-elt"
          }
        ]
      },
      "63": {
        "name": "let-binding-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "64": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "65": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "66": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "67": {
        "name": "letrec-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "68": {
        "name": "letrec-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1"
          }
        ]
      },
      "69": {
        "name": "letrec-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-binding"
          }
        ]
      },
      "70": {
        "name": "letrec-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "71": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "72": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "73": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "74": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "75": {
        "name": "type-let-bind-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "76": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "77": {
        "name": "type-let-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "78": {
        "name": "type-let-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1"
          }
        ]
      },
      "79": {
        "name": "type-let-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-bind-elt"
          }
        ]
      },
      "80": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "81": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "82": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "83": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "84": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "85": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "86": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "87": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "88": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1_star"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I3"
          }
        ]
      },
      "89": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "90": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "91": {
        "name": "ty-params_I0_I1_star",
        "position": 0,
        "symbols": []
      },
      "92": {
        "name": "ty-params_I0_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1"
          }
        ]
      },
      "93": {
        "name": "ty-params_I0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-ty-param"
          }
        ]
      },
      "94": {
        "name": "ty-params_I0_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "95": {
        "name": "ty-params_I0_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "96": {
        "name": "list-ty-param",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "97": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "98": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "99": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "100": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "101": {
        "name": "args_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "102": {
        "name": "args_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I0"
          }
        ]
      },
      "103": {
        "name": "args_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-arg-elt"
          }
        ]
      },
      "104": {
        "name": "list-arg-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "105": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "106": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "107": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "108": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "109": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "110": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "111": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "112": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "113": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "114": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "115": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "116": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "117": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "118": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "119": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "120": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "121": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "122": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "123": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "124": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "125": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "126": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "127": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "128": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "129": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "130": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "131": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "132": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "133": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "134": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "135": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "136": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "137": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "138": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "139": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "140": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "141": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "142": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "143": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "144": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "145": {
        "name": "variant-members_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "146": {
        "name": "variant-members_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0"
          }
        ]
      },
      "147": {
        "name": "variant-members_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-variant-member"
          }
        ]
      },
      "148": {
        "name": "list-variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "149": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "150": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "151": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "152": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "153": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "154": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "155": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "156": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "157": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "158": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "159": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "160": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "161": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "162": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "163": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "164": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "165": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "166": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "167": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "168": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "169": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "170": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "171": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "172": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "173": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "174": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "175": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "176": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "177": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "178": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "179": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "180": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "181": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "182": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "183": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "184": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "185": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "186": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "187": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "188": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "189": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "190": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "191": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "192": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "193": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "194": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "195": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "196": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "197": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "198": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "199": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "200": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "201": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "202": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "203": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "204": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "205": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "206": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "207": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "208": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "209": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "210": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "211": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "212": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "213": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "214": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "215": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "216": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "217": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "218": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "219": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "220": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "221": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "222": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "223": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "224": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "225": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "226": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "227": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "228": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "229": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "230": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "231": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "232": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "233": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "234": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "235": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "236": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "237": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "238": {
        "name": "binop-expr-commas",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "239": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "240": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "app-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "241": {
        "name": "app-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "242": {
        "name": "app-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1"
          }
        ]
      },
      "243": {
        "name": "app-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "244": {
        "name": "app-args_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "245": {
        "name": "app-args_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0"
          }
        ]
      },
      "246": {
        "name": "app-args_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr-commas"
          }
        ]
      },
      "247": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "248": {
        "name": "inst-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "249": {
        "name": "inst-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I2"
          }
        ]
      },
      "250": {
        "name": "inst-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-elt"
          }
        ]
      },
      "251": {
        "name": "inst-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "252": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "253": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "254": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "255": {
        "name": "obj-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "256": {
        "name": "obj-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I0"
          }
        ]
      },
      "257": {
        "name": "obj-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-obj-field"
          }
        ]
      },
      "258": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "259": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "260": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "261": {
        "name": "list-obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "262": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "263": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "264": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "265": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "266": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "267": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "268": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "269": {
        "name": "fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "270": {
        "name": "fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I0"
          }
        ]
      },
      "271": {
        "name": "fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-field"
          }
        ]
      },
      "272": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "273": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "274": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "275": {
        "name": "list-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "276": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "277": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "278": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "279": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_opt"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "280": {
        "name": "construct-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "281": {
        "name": "construct-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4"
          }
        ]
      },
      "282": {
        "name": "construct-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "283": {
        "name": "construct-expr_I4_I0_star",
        "position": 0,
        "symbols": []
      },
      "284": {
        "name": "construct-expr_I4_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0"
          }
        ]
      },
      "285": {
        "name": "construct-expr_I4_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr-commas"
          }
        ]
      },
      "286": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "287": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "288": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "289": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "290": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "291": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "292": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "293": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "294": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "295": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "296": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "297": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "298": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "299": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "300": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "301": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASKCOLON"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "302": {
        "name": "if-pipe-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "303": {
        "name": "if-pipe-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          }
        ]
      },
      "304": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "305": {
        "name": "if-pipe-expr_I2_opt",
        "position": 0,
        "symbols": []
      },
      "306": {
        "name": "if-pipe-expr_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "307": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "308": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "309": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "310": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "311": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "312": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "313": {
        "name": "list-cases-arg-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "314": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "315": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "316": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "317": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "318": {
        "name": "cases-args_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "319": {
        "name": "cases-args_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0"
          }
        ]
      },
      "320": {
        "name": "cases-args_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-cases-arg-elt"
          }
        ]
      },
      "321": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "322": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "323": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "324": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "325": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "326": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "327": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "328": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "329": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "330": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "331": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "332": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "333": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "334": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "335": {
        "name": "for-bind-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "336": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "337": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "338": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "339": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "340": {
        "name": "for-expr_I3_I0_star",
        "position": 0,
        "symbols": []
      },
      "341": {
        "name": "for-expr_I3_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0"
          }
        ]
      },
      "342": {
        "name": "for-expr_I3_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind-elt"
          }
        ]
      },
      "343": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "344": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "345": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "346": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "347": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "348": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "349": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "350": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "351": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "352": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "353": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "354": {
        "name": "record-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "355": {
        "name": "record-ann_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "356": {
        "name": "record-ann_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0"
          }
        ]
      },
      "357": {
        "name": "record-ann_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-ann-field"
          }
        ]
      },
      "358": {
        "name": "list-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "359": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "360": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "361": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "362": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "363": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "364": {
        "name": "noparen-arrow-ann_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "365": {
        "name": "noparen-arrow-ann_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0"
          }
        ]
      },
      "366": {
        "name": "noparen-arrow-ann_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-elt"
          }
        ]
      },
      "367": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "368": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "369": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "370": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "371": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "372": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "373": {
        "name": "arrow-ann_I1_I0_star",
        "position": 0,
        "symbols": []
      },
      "374": {
        "name": "arrow-ann_I1_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0"
          }
        ]
      },
      "375": {
        "name": "arrow-ann_I1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-elt"
          }
        ]
      },
      "376": {
        "name": "arrow-ann-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "377": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "app-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "378": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "379": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "380": {
        "name": "app-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "381": {
        "name": "app-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "app-ann_I2"
          }
        ]
      },
      "382": {
        "name": "app-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann-elt"
          }
        ]
      },
      "383": {
        "name": "app-ann-elt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "384": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "385": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "386": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "387": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "388": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "594": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "659": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "856": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "891": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "2972": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "2974": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "5488": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "5586": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "5620": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "5757": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "5798": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "5938": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "5973": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "5976": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "5979": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "5982": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "5985": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "5988": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "5991": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "5994": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "5997": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "6000": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "6003": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "6006": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "6020": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "6309": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "6313": {
        "name": "binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I0"
          }
        ]
      },
      "6315": {
        "name": "binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "6317": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "6397": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "6475": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "6568": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "6601": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "6787": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "7127": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "7164": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "7201": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "7238": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "7275": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "7312": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "7349": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "7386": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "7423": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "7460": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "7497": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "7534": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "7571": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "7608": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "7645": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "7682": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "7719": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "7756": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "7793": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "7830": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "7867": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "7904": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "7941": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "7978": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "8015": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "8052": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "8647": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "8679": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "11160": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "11358": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "11392": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "11538": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "11573": {
        "name": "end",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "11608": {
        "name": "end",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "11712": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "11715": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "11736": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "11757": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "11778": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "11799": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "11820": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "11841": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "11862": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "11883": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "11904": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "11925": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "11946": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "11967": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "11988": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "12009": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "12012": {
        "name": "binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "binding_I2_opt"
          }
        ]
      },
      "12473": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "12841": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "13067": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "13069": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "13075": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "13077": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "13153": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "13246": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "13356": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "13361": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "13557": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "13591": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "13965": {
        "name": "record-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "13975": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13985": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "13991": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "13995": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "14002": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "14005": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "14008": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "14017": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "14018": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "14023": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "14027": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "14031": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "14035": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "14036": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "14044": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "14104": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "14113": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "14119": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "14197": {
        "name": "binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "binding_I2_opt"
          }
        ]
      },
      "14199": {
        "name": "binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding_I2"
          }
        ]
      },
      "14215": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "14218": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "14264": {
        "name": "multi-let-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1"
          }
        ]
      },
      "14268": {
        "name": "multi-let-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-binding-elt"
          }
        ]
      },
      "14314": {
        "name": "letrec-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1"
          }
        ]
      },
      "14317": {
        "name": "letrec-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-binding"
          }
        ]
      },
      "14326": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "14329": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "14372": {
        "name": "type-let-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-bind-elt"
          }
        ]
      },
      "14375": {
        "name": "type-let-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1"
          }
        ]
      },
      "14384": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "14391": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "14480": {
        "name": "app-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1"
          }
        ]
      },
      "14656": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "14676": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "14696": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "14716": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "14782": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "14802": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "14822": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "14842": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "14862": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "14882": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "14902": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "14922": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "14942": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "14962": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "14982": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "15002": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "15022": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "15099": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "15352": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "15401": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "15438": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "15447": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "15455": {
        "name": "obj-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I0"
          }
        ]
      },
      "15458": {
        "name": "obj-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-obj-field"
          }
        ]
      },
      "15643": {
        "name": "if-pipe-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          }
        ]
      },
      "15647": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "15651": {
        "name": "if-pipe-expr_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "15747": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "15852": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "15887": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "15954": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15988": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16022": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-string"
          }
        ]
      },
      "16056": {
        "name": "import-string",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "16168": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "16205": {
        "name": "record-ann_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "16209": {
        "name": "record-ann_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I0"
          }
        ]
      },
      "16211": {
        "name": "record-ann_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-ann-field"
          }
        ]
      },
      "16233": {
        "name": "noparen-arrow-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "16254": {
        "name": "noparen-arrow-ann_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_I0"
          }
        ]
      },
      "16259": {
        "name": "noparen-arrow-ann_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-elt"
          }
        ]
      },
      "16272": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "16297": {
        "name": "type-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "16300": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "16303": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "16306": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "16346": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "16369": {
        "name": "binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "16380": {
        "name": "let-binding-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "16421": {
        "name": "letrec-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "16479": {
        "name": "type-let-bind-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "16559": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "16562": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "16568": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "app-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "16607": {
        "name": "app-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "16674": {
        "name": "app-args_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr-commas"
          }
        ]
      },
      "16694": {
        "name": "app-args_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "app-args_I1_I0"
          }
        ]
      },
      "16768": {
        "name": "inst-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I2"
          }
        ]
      },
      "16773": {
        "name": "inst-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-elt"
          }
        ]
      },
      "16786": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "16943": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "16977": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "17048": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "17061": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "17063": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "17065": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "17075": {
        "name": "ty-params_I0_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1"
          }
        ]
      },
      "17077": {
        "name": "ty-params_I0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-ty-param"
          }
        ]
      },
      "17123": {
        "name": "list-obj-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "17124": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "17128": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "17130": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "17533": {
        "name": "if-pipe-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "17539": {
        "name": "if-pipe-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ASKCOLON"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "17651": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "17788": {
        "name": "list-ann-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "17790": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "17795": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "17797": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "17803": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "17806": {
        "name": "arrow-ann-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "17817": {
        "name": "arrow-ann_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "17819": {
        "name": "arrow-ann_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-elt"
          }
        ]
      },
      "17824": {
        "name": "arrow-ann_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_I0"
          }
        ]
      },
      "17944": {
        "name": "type-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "17999": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "18002": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "18054": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "18060": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "18066": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "18072": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "18075": {
        "name": "binop-expr-commas",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "18095": {
        "name": "inst-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "18100": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "18138": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "18181": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "18188": {
        "name": "fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I0"
          }
        ]
      },
      "18190": {
        "name": "fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-field"
          }
        ]
      },
      "18192": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "18356": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "18390": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "18393": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "18400": {
        "name": "args_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I0"
          }
        ]
      },
      "18403": {
        "name": "args_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-arg-elt"
          }
        ]
      },
      "18406": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "18408": {
        "name": "list-ty-param",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "18410": {
        "name": "ty-params_I0",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I1_star"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I3"
          }
        ]
      },
      "18412": {
        "name": "ty-params_I0_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "18414": {
        "name": "ty-params_I0_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "18458": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "18462": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "18558": {
        "name": "construct-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4"
          }
        ]
      },
      "18709": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "18716": {
        "name": "if-pipe-expr_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "18797": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "18802": {
        "name": "for-expr_I3_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind-elt"
          }
        ]
      },
      "18805": {
        "name": "for-expr_I3_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I0"
          }
        ]
      },
      "18846": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "18914": {
        "name": "import-stmt_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "import-stmt_I2"
          }
        ]
      },
      "18923": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "18952": {
        "name": "app-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "app-ann_I2"
          }
        ]
      },
      "18957": {
        "name": "app-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann-elt"
          }
        ]
      },
      "18962": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "18982": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19019": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19057": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "19060": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19116": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "19123": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "19129": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "19135": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "19188": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "19200": {
        "name": "list-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "19201": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "19204": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "19206": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "19245": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "19248": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "19251": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "19254": {
        "name": "list-arg-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "19294": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "19302": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_opt"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "19341": {
        "name": "construct-expr_I4",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "19388": {
        "name": "construct-expr_I4_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr-commas"
          }
        ]
      },
      "19411": {
        "name": "construct-expr_I4_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "construct-expr_I4_I0"
          }
        ]
      },
      "19473": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "19478": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "19483": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "19486": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "19494": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "19663": {
        "name": "for-bind-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "19705": {
        "name": "import-stmt",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "import-stmt_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "19739": {
        "name": "import-stmt_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "19743": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "19747": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "19751": {
        "name": "app-ann-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "19756": {
        "name": "app-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "app-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "19770": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "19792": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "19816": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "19822": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "19840": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "19844": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "19852": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "19858": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19895": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "19898": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19935": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "19941": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "19978": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20076": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "20082": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "20116": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "20119": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20122": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "20129": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "20135": {
        "name": "variant-members_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I0"
          }
        ]
      },
      "20139": {
        "name": "variant-members_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-variant-member"
          }
        ]
      },
      "20146": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "20149": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "20155": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "20161": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "20167": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "20181": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20230": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "20234": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "20238": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "20278": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20281": {
        "name": "list-variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "20285": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "20288": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20291": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "20297": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "20306": {
        "name": "obj-field",
        "position": 7,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20313": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20329": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20366": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20417": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "20423": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "20425": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20428": {
        "name": "field",
        "position": 7,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Nonterm",
            "name": "end"
          }
        ]
      },
      "20433": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "20455": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20459": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20462": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "20464": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "20467": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "20476": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "20479": {
        "name": "cases-args_I1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-cases-arg-elt"
          }
        ]
      },
      "20483": {
        "name": "cases-args_I1_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I0"
          }
        ]
      },
      "20487": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "20491": {
        "name": "list-cases-arg-elt",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "20495": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.defaultAction",
      "3": "Rule.defaultAction",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.Inline",
      "10": "Rule.Inline",
      "11": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "12": "Rule.Inline",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.Inline",
      "17": "Rule.ListSnoc(\"import-stmt_I2_star\", \"import-stmt_I2\", true)",
      "18": "Rule.Inline",
      "19": "Rule.defaultAction",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.Inline",
      "24": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "25": "Rule.Inline",
      "26": "Rule.defaultAction",
      "27": "Rule.defaultAction",
      "28": "Rule.defaultAction",
      "29": "Rule.defaultAction",
      "30": "Rule.defaultAction",
      "31": "Rule.defaultAction",
      "32": "Rule.defaultAction",
      "33": "Rule.Inline",
      "34": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "35": "Rule.Inline",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.defaultAction",
      "48": "Rule.defaultAction",
      "49": "Rule.defaultAction",
      "50": "Rule.defaultAction",
      "51": "Rule.defaultAction",
      "52": "Rule.Inline",
      "53": "Rule.Inline",
      "54": "Rule.Inline",
      "55": "Rule.Inline",
      "56": "Rule.Inline",
      "57": "Rule.Inline",
      "58": "Rule.defaultAction",
      "59": "Rule.defaultAction",
      "60": "Rule.Inline",
      "61": "Rule.ListSnoc(\"multi-let-expr_I1_star\", \"multi-let-expr_I1\", true)",
      "62": "Rule.Inline",
      "63": "Rule.defaultAction",
      "64": "Rule.defaultAction",
      "65": "Rule.defaultAction",
      "66": "Rule.defaultAction",
      "67": "Rule.Inline",
      "68": "Rule.ListSnoc(\"letrec-expr_I1_star\", \"letrec-expr_I1\", true)",
      "69": "Rule.Inline",
      "70": "Rule.defaultAction",
      "71": "Rule.defaultAction",
      "72": "Rule.defaultAction",
      "73": "Rule.defaultAction",
      "74": "Rule.defaultAction",
      "75": "Rule.defaultAction",
      "76": "Rule.defaultAction",
      "77": "Rule.Inline",
      "78": "Rule.ListSnoc(\"type-let-expr_I1_star\", \"type-let-expr_I1\", true)",
      "79": "Rule.Inline",
      "80": "Rule.defaultAction",
      "81": "Rule.Inline",
      "82": "Rule.Inline",
      "83": "Rule.defaultAction",
      "84": "Rule.defaultAction",
      "85": "Rule.defaultAction",
      "86": "Rule.Inline",
      "87": "Rule.Inline",
      "88": "Rule.Inline",
      "89": "Rule.Inline",
      "90": "Rule.Inline",
      "91": "Rule.Inline",
      "92": "Rule.ListSnoc(\"ty-params_I0_I1_star\", \"ty-params_I0_I1\", true)",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.Inline",
      "96": "Rule.defaultAction",
      "97": "Rule.defaultAction",
      "98": "Rule.Inline",
      "99": "Rule.Inline",
      "100": "Rule.Inline",
      "101": "Rule.Inline",
      "102": "Rule.ListSnoc(\"args_I1_I0_star\", \"args_I1_I0\", true)",
      "103": "Rule.Inline",
      "104": "Rule.defaultAction",
      "105": "Rule.defaultAction",
      "106": "Rule.Inline",
      "107": "Rule.Inline",
      "108": "Rule.Inline",
      "109": "Rule.defaultAction",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.Inline",
      "113": "Rule.defaultAction",
      "114": "Rule.Inline",
      "115": "Rule.Inline",
      "116": "Rule.Inline",
      "117": "Rule.defaultAction",
      "118": "Rule.defaultAction",
      "119": "Rule.Inline",
      "120": "Rule.Inline",
      "121": "Rule.defaultAction",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.Inline",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.defaultAction",
      "128": "Rule.defaultAction",
      "129": "Rule.defaultAction",
      "130": "Rule.Inline",
      "131": "Rule.Inline",
      "132": "Rule.Inline",
      "133": "Rule.Inline",
      "134": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "135": "Rule.Inline",
      "136": "Rule.defaultAction",
      "137": "Rule.defaultAction",
      "138": "Rule.defaultAction",
      "139": "Rule.defaultAction",
      "140": "Rule.defaultAction",
      "141": "Rule.defaultAction",
      "142": "Rule.Inline",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.Inline",
      "146": "Rule.ListSnoc(\"variant-members_I1_I0_star\", \"variant-members_I1_I0\", true)",
      "147": "Rule.Inline",
      "148": "Rule.defaultAction",
      "149": "Rule.defaultAction",
      "150": "Rule.Inline",
      "151": "Rule.Inline",
      "152": "Rule.Inline",
      "153": "Rule.defaultAction",
      "154": "Rule.Inline",
      "155": "Rule.Inline",
      "156": "Rule.Inline",
      "157": "Rule.defaultAction",
      "158": "Rule.Inline",
      "159": "Rule.Inline",
      "160": "Rule.Inline",
      "161": "Rule.defaultAction",
      "162": "Rule.defaultAction",
      "163": "Rule.defaultAction",
      "164": "Rule.defaultAction",
      "165": "Rule.defaultAction",
      "166": "Rule.Inline",
      "167": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "168": "Rule.Inline",
      "169": "Rule.defaultAction",
      "170": "Rule.defaultAction",
      "171": "Rule.defaultAction",
      "172": "Rule.defaultAction",
      "173": "Rule.defaultAction",
      "174": "Rule.defaultAction",
      "175": "Rule.defaultAction",
      "176": "Rule.defaultAction",
      "177": "Rule.defaultAction",
      "178": "Rule.defaultAction",
      "179": "Rule.defaultAction",
      "180": "Rule.defaultAction",
      "181": "Rule.defaultAction",
      "182": "Rule.defaultAction",
      "183": "Rule.defaultAction",
      "184": "Rule.defaultAction",
      "185": "Rule.defaultAction",
      "186": "Rule.defaultAction",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.defaultAction",
      "192": "Rule.defaultAction",
      "193": "Rule.defaultAction",
      "194": "Rule.defaultAction",
      "195": "Rule.defaultAction",
      "196": "Rule.defaultAction",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.Inline",
      "242": "Rule.Inline",
      "243": "Rule.Inline",
      "244": "Rule.Inline",
      "245": "Rule.ListSnoc(\"app-args_I1_I0_star\", \"app-args_I1_I0\", true)",
      "246": "Rule.Inline",
      "247": "Rule.defaultAction",
      "248": "Rule.Inline",
      "249": "Rule.ListSnoc(\"inst-expr_I2_star\", \"inst-expr_I2\", true)",
      "250": "Rule.Inline",
      "251": "Rule.defaultAction",
      "252": "Rule.defaultAction",
      "253": "Rule.defaultAction",
      "254": "Rule.defaultAction",
      "255": "Rule.Inline",
      "256": "Rule.ListSnoc(\"obj-fields_I0_star\", \"obj-fields_I0\", true)",
      "257": "Rule.Inline",
      "258": "Rule.Inline",
      "259": "Rule.Inline",
      "260": "Rule.Inline",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.Inline",
      "265": "Rule.Inline",
      "266": "Rule.Inline",
      "267": "Rule.defaultAction",
      "268": "Rule.defaultAction",
      "269": "Rule.Inline",
      "270": "Rule.ListSnoc(\"fields_I0_star\", \"fields_I0\", true)",
      "271": "Rule.Inline",
      "272": "Rule.Inline",
      "273": "Rule.Inline",
      "274": "Rule.Inline",
      "275": "Rule.defaultAction",
      "276": "Rule.defaultAction",
      "277": "Rule.defaultAction",
      "278": "Rule.defaultAction",
      "279": "Rule.defaultAction",
      "280": "Rule.Inline",
      "281": "Rule.Inline",
      "282": "Rule.Inline",
      "283": "Rule.Inline",
      "284": "Rule.ListSnoc(\"construct-expr_I4_I0_star\", \"construct-expr_I4_I0\", true)",
      "285": "Rule.Inline",
      "286": "Rule.defaultAction",
      "287": "Rule.defaultAction",
      "288": "Rule.defaultAction",
      "289": "Rule.defaultAction",
      "290": "Rule.defaultAction",
      "291": "Rule.defaultAction",
      "292": "Rule.defaultAction",
      "293": "Rule.defaultAction",
      "294": "Rule.Inline",
      "295": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "296": "Rule.Inline",
      "297": "Rule.Inline",
      "298": "Rule.Inline",
      "299": "Rule.Inline",
      "300": "Rule.defaultAction",
      "301": "Rule.defaultAction",
      "302": "Rule.Inline",
      "303": "Rule.ListSnoc(\"if-pipe-expr_I1_star\", \"if-pipe-expr_I1\", true)",
      "304": "Rule.Inline",
      "305": "Rule.Inline",
      "306": "Rule.Inline",
      "307": "Rule.Inline",
      "308": "Rule.defaultAction",
      "309": "Rule.defaultAction",
      "310": "Rule.Inline",
      "311": "Rule.Inline",
      "312": "Rule.Inline",
      "313": "Rule.defaultAction",
      "314": "Rule.defaultAction",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.Inline",
      "318": "Rule.Inline",
      "319": "Rule.ListSnoc(\"cases-args_I1_I0_star\", \"cases-args_I1_I0\", true)",
      "320": "Rule.Inline",
      "321": "Rule.defaultAction",
      "322": "Rule.Inline",
      "323": "Rule.Inline",
      "324": "Rule.Inline",
      "325": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "326": "Rule.Inline",
      "327": "Rule.Inline",
      "328": "Rule.Inline",
      "329": "Rule.Inline",
      "330": "Rule.defaultAction",
      "331": "Rule.Inline",
      "332": "Rule.Inline",
      "333": "Rule.Inline",
      "334": "Rule.defaultAction",
      "335": "Rule.defaultAction",
      "336": "Rule.defaultAction",
      "337": "Rule.Inline",
      "338": "Rule.Inline",
      "339": "Rule.Inline",
      "340": "Rule.Inline",
      "341": "Rule.ListSnoc(\"for-expr_I3_I0_star\", \"for-expr_I3_I0\", true)",
      "342": "Rule.Inline",
      "343": "Rule.defaultAction",
      "344": "Rule.defaultAction",
      "345": "Rule.defaultAction",
      "346": "Rule.defaultAction",
      "347": "Rule.defaultAction",
      "348": "Rule.defaultAction",
      "349": "Rule.defaultAction",
      "350": "Rule.defaultAction",
      "351": "Rule.defaultAction",
      "352": "Rule.Inline",
      "353": "Rule.Inline",
      "354": "Rule.Inline",
      "355": "Rule.Inline",
      "356": "Rule.ListSnoc(\"record-ann_I1_I0_star\", \"record-ann_I1_I0\", true)",
      "357": "Rule.Inline",
      "358": "Rule.defaultAction",
      "359": "Rule.defaultAction",
      "360": "Rule.defaultAction",
      "361": "Rule.Inline",
      "362": "Rule.Inline",
      "363": "Rule.Inline",
      "364": "Rule.Inline",
      "365": "Rule.ListSnoc(\"noparen-arrow-ann_I0_I0_star\", \"noparen-arrow-ann_I0_I0\", true)",
      "366": "Rule.Inline",
      "367": "Rule.defaultAction",
      "368": "Rule.Inline",
      "369": "Rule.Inline",
      "370": "Rule.Inline",
      "371": "Rule.Inline",
      "372": "Rule.Inline",
      "373": "Rule.Inline",
      "374": "Rule.ListSnoc(\"arrow-ann_I1_I0_star\", \"arrow-ann_I1_I0\", true)",
      "375": "Rule.Inline",
      "376": "Rule.defaultAction",
      "377": "Rule.defaultAction",
      "378": "Rule.Inline",
      "379": "Rule.Inline",
      "380": "Rule.Inline",
      "381": "Rule.ListSnoc(\"app-ann_I2_star\", \"app-ann_I2\", true)",
      "382": "Rule.Inline",
      "383": "Rule.defaultAction",
      "384": "Rule.defaultAction",
      "385": "Rule.Inline",
      "386": "Rule.Inline",
      "387": "Rule.defaultAction",
      "388": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      127,
      128,
      122,
      123,
      124,
      125,
      126,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      267,
      264,
      265,
      266,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              4,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              4,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              4,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              3,
              2
            ],
            [
              4,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              594,
              8
            ],
            [
              32,
              8
            ],
            [
              33,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              7,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              7,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              659,
              68
            ],
            [
              7,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              856,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              891,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              52,
              10
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'FUN": {
          "push": 43
        },
        "'CHECK": {
          "push": 44
        },
        "check-expr_I0": {
          "push": 45
        },
        "'CHECKCOLON": {
          "push": 46
        },
        "'EXAMPLESCOLON": {
          "push": 47
        },
        "'PARENSPACE": {
          "push": 48
        },
        "'DATA": {
          "push": 49
        },
        "'VAR": {
          "push": 50
        },
        "'REC": {
          "push": 51
        },
        "'WHEN": {
          "push": 52
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "$": {
          "reductions": [
            [
              2972,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              52,
              10
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 89
        },
        "block_I0": {
          "push": 90
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'FUN": {
          "push": 43
        },
        "'CHECK": {
          "push": 44
        },
        "check-expr_I0": {
          "push": 45
        },
        "'CHECKCOLON": {
          "push": 46
        },
        "'EXAMPLESCOLON": {
          "push": 47
        },
        "'PARENSPACE": {
          "push": 48
        },
        "'DATA": {
          "push": 49
        },
        "'VAR": {
          "push": 50
        },
        "'REC": {
          "push": 51
        },
        "'WHEN": {
          "push": 52
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        },
        "$": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              2974,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 91
        },
        "$": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              10,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              10,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5488,
              5
            ],
            [
              10,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5586,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5620,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 92
        },
        "record-ann": {
          "push": 93
        },
        "'LBRACE": {
          "push": 94
        }
      },
      {
        "'COLONCOLON": {
          "push": 95
        },
        "'COLONEQUALS": {
          "push": 96
        },
        "$": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5798,
              0
            ]
          ]
        }
      },
      {
        "end": {
          "push": 97
        },
        "'END": {
          "push": 98
        },
        "'SEMI": {
          "push": 99
        }
      },
      {
        "$": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5938,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5973,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5976,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5979,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5982,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5985,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5988,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5991,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5994,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5997,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6000,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6003,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6006,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 100
        }
      },
      {
        "'NAME": {
          "push": 101
        }
      },
      {
        "'EQUALS": {
          "push": 102
        }
      },
      {
        "check-op": {
          "push": 103
        },
        "check-op-postfix": {
          "push": 104
        },
        "'IS": {
          "push": 105
        },
        "'ISEQUALEQUAL": {
          "push": 106
        },
        "'ISEQUALTILDE": {
          "push": 107
        },
        "'ISSPACESHIP": {
          "push": 108
        },
        "'ISNOT": {
          "push": 109
        },
        "'ISNOTEQUALEQUAL": {
          "push": 110
        },
        "'ISNOTEQUALTILDE": {
          "push": 111
        },
        "'ISNOTSPACESHIP": {
          "push": 112
        },
        "'RAISES": {
          "push": 113
        },
        "'RAISESOTHER": {
          "push": 114
        },
        "'SATISFIES": {
          "push": 115
        },
        "'SATISFIESNOT": {
          "push": 116
        },
        "'RAISESSATISFIES": {
          "push": 117
        },
        "'RAISESVIOLATES": {
          "push": 118
        },
        "'RAISESNOT": {
          "push": 119
        },
        "$": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6020,
              0
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              6309,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 120
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              6313,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              6315,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6317,
              0
            ]
          ]
        }
      },
      {
        "multi-let-expr_I1_star": {
          "push": 121
        },
        "'NAME": {
          "reductions": [
            [
              60,
              12
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              60,
              12
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              60,
              12
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6397,
              0
            ]
          ]
        }
      },
      {
        "letrec-expr_I1_star": {
          "push": 122
        },
        "'NAME": {
          "reductions": [
            [
              67,
              13
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              67,
              13
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6475,
              0
            ]
          ]
        }
      },
      {
        "type-let-expr_I1_star": {
          "push": 123
        },
        "'NAME": {
          "reductions": [
            [
              77,
              14
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              77,
              14
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 124
        }
      },
      {
        "'STRING": {
          "push": 125
        }
      },
      {
        "block": {
          "push": 126
        },
        "block_I0_star": {
          "push": 8
        },
        "'END": {
          "reductions": [
            [
              32,
              8
            ],
            [
              33,
              9
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              32,
              8
            ],
            [
              33,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        }
      },
      {
        "'END": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6568,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6601,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 128
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "'NAME": {
          "push": 129
        }
      },
      {
        "toplevel-binding": {
          "push": 130
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "'NAME": {
          "reductions": [
            [
              52,
              10
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 131
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "'NAME": {
          "reductions": [
            [
              52,
              10
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 132
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 133
        },
        "'LANGLE": {
          "push": 134
        },
        "binop-expr_I1_star": {
          "push": 135
        },
        "app-args": {
          "push": 136
        },
        "'DOT": {
          "push": 137
        },
        "'BANG": {
          "push": 138
        },
        "$": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              166,
              36
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              6787,
              36
            ],
            [
              166,
              36
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7127,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7164,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7201,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7238,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7275,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7312,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7349,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7386,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7423,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7460,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7497,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7534,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7571,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7608,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7645,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7682,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7719,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7756,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7793,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7830,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7867,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7904,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7941,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              7978,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8015,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8052,
              0
            ]
          ]
        }
      },
      {
        "fun-header": {
          "push": 139
        },
        "ty-params": {
          "push": 140
        },
        "ty-params_I0_opt": {
          "push": 141
        },
        "ty-params_I0": {
          "push": 142
        },
        "ty-params_I0_I0": {
          "push": 143
        },
        "'LANGLE": {
          "push": 144
        },
        "'LT": {
          "push": 145
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              85,
              15
            ],
            [
              86,
              16
            ]
          ]
        }
      },
      {
        "fun-header": {
          "push": 146
        },
        "ty-params": {
          "push": 140
        },
        "ty-params_I0_opt": {
          "push": 141
        },
        "ty-params_I0": {
          "push": 142
        },
        "ty-params_I0_I0": {
          "push": 143
        },
        "'LANGLE": {
          "push": 144
        },
        "'LT": {
          "push": 145
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              85,
              15
            ],
            [
              86,
              16
            ]
          ]
        }
      },
      {
        "obj-fields": {
          "push": 147
        },
        "'RBRACE": {
          "push": 148
        },
        "obj-fields_I0_star": {
          "push": 149
        },
        "'NAME": {
          "reductions": [
            [
              255,
              40
            ]
          ]
        },
        "'REF": {
          "reductions": [
            [
              255,
              40
            ]
          ]
        }
      },
      {
        "construct-modifier": {
          "push": 150
        },
        "'LAZY": {
          "push": 151
        },
        "'NAME": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              286,
              47
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 152
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "if-pipe-expr_I1_star": {
          "push": 153
        },
        "'END": {
          "reductions": [
            [
              302,
              50
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              302,
              50
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              302,
              50
            ]
          ]
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 154
        },
        "'PARENSPACE": {
          "push": 155
        },
        "cases-expr_I1": {
          "push": 156
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 157
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "block": {
          "push": 158
        },
        "block_I0_star": {
          "push": 8
        },
        "'END": {
          "reductions": [
            [
              32,
              8
            ],
            [
              33,
              9
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              32,
              8
            ],
            [
              33,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              33,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8647,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8679,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2": {
          "push": 159
        },
        "import-stmt": {
          "push": 160
        },
        "'INCLUDE": {
          "push": 161
        },
        "'IMPORT": {
          "push": 162
        },
        "$": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11160,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11358,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11392,
              0
            ]
          ]
        }
      },
      {
        "record-ann_I1_opt": {
          "push": 163
        },
        "record-ann_I1": {
          "push": 164
        },
        "record-ann_I1_I0_star": {
          "push": 165
        },
        "'NAME": {
          "reductions": [
            [
              355,
              61
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              352,
              60
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166,
          "reductions": [
            [
              364,
              63
            ]
          ]
        },
        "'PARENNOSPACE": {
          "push": 167,
          "reductions": [
            [
              364,
              63
            ]
          ]
        },
        "record-ann": {
          "push": 168
        },
        "ann": {
          "push": 169
        },
        "contract-stmt_I2": {
          "push": 170
        },
        "noparen-arrow-ann": {
          "push": 171
        },
        "'PARENSPACE": {
          "push": 172,
          "reductions": [
            [
              364,
              63
            ]
          ]
        },
        "'LBRACE": {
          "push": 94,
          "reductions": [
            [
              364,
              63
            ]
          ]
        },
        "name-ann": {
          "push": 173
        },
        "arrow-ann": {
          "push": 174
        },
        "app-ann": {
          "push": 175
        },
        "pred-ann": {
          "push": 176
        },
        "dot-ann": {
          "push": 177
        },
        "noparen-arrow-ann_I0_opt": {
          "push": 178
        },
        "noparen-arrow-ann_I0": {
          "push": 179
        },
        "noparen-arrow-ann_I0_I0_star": {
          "push": 180
        },
        "arrow-ann_I0": {
          "push": 181
        },
        "app-ann_I0": {
          "push": 182
        },
        "'THINARROW": {
          "reductions": [
            [
              361,
              62
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 183
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "$": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11538,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11573,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11608,
              0
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "push": 184
        }
      },
      {
        "'AS": {
          "push": 185
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 186
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "check-test_A0_I2_opt": {
          "push": 187
        },
        "check-test_A0_I2": {
          "push": 188
        },
        "'PERCENT": {
          "push": 189
        },
        "'NAME": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              122,
              26
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11712,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11715,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11757,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11778,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11799,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11820,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11841,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11862,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11883,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11904,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11925,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11946,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11967,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11988,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12009,
              0
            ]
          ]
        }
      },
      {
        "binding_I2_opt": {
          "push": 190
        },
        "binding_I2": {
          "push": 191
        },
        "'COLONCOLON": {
          "push": 192
        },
        "'FROM": {
          "reductions": [
            [
              12012,
              11
            ],
            [
              55,
              11
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12012,
              11
            ],
            [
              55,
              11
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12012,
              11
            ],
            [
              55,
              11
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              12012,
              11
            ],
            [
              55,
              11
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 193
        },
        "var-expr": {
          "push": 194
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "let-binding": {
          "push": 195
        },
        "multi-let-expr_I1": {
          "push": 196
        },
        "let-binding-elt": {
          "push": 197
        },
        "'VAR": {
          "push": 50
        },
        "'NAME": {
          "reductions": [
            [
              52,
              10
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 198
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "binding_I0_opt": {
          "push": 34
        },
        "binding_I0": {
          "push": 35
        },
        "'SHADOW": {
          "push": 36
        },
        "letrec-expr_I1": {
          "push": 199
        },
        "letrec-binding": {
          "push": 200
        },
        "'NAME": {
          "reductions": [
            [
              52,
              10
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 201
        },
        "'NEWTYPE": {
          "push": 202
        },
        "type-bind": {
          "push": 203
        },
        "newtype-bind": {
          "push": 204
        },
        "type-let-bind": {
          "push": 205
        },
        "type-let-bind-elt": {
          "push": 206
        },
        "type-let-expr_I1": {
          "push": 207
        }
      },
      {
        "fun-header": {
          "push": 208
        },
        "ty-params": {
          "push": 140
        },
        "ty-params_I0_opt": {
          "push": 141
        },
        "ty-params_I0": {
          "push": 142
        },
        "ty-params_I0_I0": {
          "push": 143
        },
        "'LANGLE": {
          "push": 144
        },
        "'LT": {
          "push": 145
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              85,
              15
            ],
            [
              86,
              16
            ]
          ]
        }
      },
      {
        "'COLON": {
          "push": 209
        }
      },
      {
        "end": {
          "push": 210
        },
        "'END": {
          "push": 98
        },
        "'SEMI": {
          "push": 99
        }
      },
      {
        "$": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              5757,
              0
            ]
          ]
        }
      },
      {
        "'RPAREN": {
          "push": 211
        }
      },
      {
        "ty-params": {
          "push": 212
        },
        "ty-params_I0_opt": {
          "push": 141
        },
        "ty-params_I0": {
          "push": 142
        },
        "ty-params_I0_I0": {
          "push": 143
        },
        "'LANGLE": {
          "push": 144
        },
        "'LT": {
          "push": 145
        },
        "'COLON": {
          "reductions": [
            [
              85,
              15
            ],
            [
              86,
              16
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "push": 213
        }
      },
      {
        "'EQUALS": {
          "push": 214
        }
      },
      {
        "'COLON": {
          "push": 215
        }
      },
      {
        "app-args_I1_opt": {
          "push": 216
        },
        "app-args_I1": {
          "push": 217
        },
        "app-args_I1_I0_star": {
          "push": 218
        },
        "'NAME": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              241,
              37
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              244,
              38
            ]
          ]
        }
      },
      {
        "inst-expr_I2_star": {
          "push": 219
        },
        "'NAME": {
          "reductions": [
            [
              248,
              39
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              248,
              39
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              248,
              39
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              248,
              39
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 220
        },
        "'LT": {
          "push": 221
        },
        "'GT": {
          "push": 222
        },
        "binop-expr_I1": {
          "push": 223
        },
        "binop": {
          "push": 224
        },
        "'PLUS": {
          "push": 225
        },
        "'DASH": {
          "push": 226
        },
        "'SLASH": {
          "push": 227
        },
        "'LEQ": {
          "push": 228
        },
        "'GEQ": {
          "push": 229
        },
        "'EQUALEQUAL": {
          "push": 230
        },
        "'SPACESHIP": {
          "push": 231
        },
        "'EQUALTILDE": {
          "push": 232
        },
        "'NEQ": {
          "push": 233
        },
        "'AND": {
          "push": 234
        },
        "'OR": {
          "push": 235
        },
        "'CARET": {
          "push": 236
        },
        "$": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12473,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12841,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 237
        },
        "'LBRACE": {
          "push": 238
        }
      },
      {
        "'NAME": {
          "push": 239
        },
        "'LBRACE": {
          "push": 240
        }
      },
      {
        "'COLON": {
          "push": 241
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 242
        },
        "args": {
          "push": 243
        }
      },
      {
        "'PARENNOSPACE": {
          "reductions": [
            [
              13067,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13067,
              0
            ]
          ]
        }
      },
      {
        "'PARENNOSPACE": {
          "reductions": [
            [
              13069,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13069,
              0
            ]
          ]
        }
      },
      {
        "ty-params_I0_I1_star": {
          "push": 244
        },
        "'NAME": {
          "reductions": [
            [
              91,
              17
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13075,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13077,
              0
            ]
          ]
        }
      },
      {
        "'COLON": {
          "push": 245
        }
      },
      {
        "'RBRACE": {
          "push": 246
        }
      },
      {
        "$": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13153,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 247
        },
        "'REF": {
          "push": 248
        },
        "obj-field": {
          "push": 249
        },
        "obj-fields_I0": {
          "push": 250
        },
        "list-obj-field": {
          "push": 251
        },
        "key": {
          "push": 252
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 253
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13246,
              0
            ]
          ]
        }
      },
      {
        "'COLON": {
          "push": 254
        }
      },
      {
        "'BAR": {
          "push": 255
        },
        "if-pipe-expr_I2_opt": {
          "push": 256
        },
        "if-pipe-expr_I1": {
          "push": 257
        },
        "if-pipe-branch": {
          "push": 258
        },
        "if-pipe-expr_I2": {
          "push": 259
        },
        "'END": {
          "reductions": [
            [
              305,
              51
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              305,
              51
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13356,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13356,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13356,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13356,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13361,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13361,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13361,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13361,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166
        },
        "'PARENNOSPACE": {
          "push": 167
        },
        "record-ann": {
          "push": 168
        },
        "ann": {
          "push": 260
        },
        "'PARENSPACE": {
          "push": 172
        },
        "'LBRACE": {
          "push": 94
        },
        "name-ann": {
          "push": 173
        },
        "arrow-ann": {
          "push": 174
        },
        "app-ann": {
          "push": 175
        },
        "pred-ann": {
          "push": 176
        },
        "dot-ann": {
          "push": 177
        },
        "arrow-ann_I0": {
          "push": 181
        },
        "app-ann_I0": {
          "push": 182
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 261
        },
        "'LANGLE": {
          "push": 134
        },
        "app-args": {
          "push": 136
        },
        "'DOT": {
          "push": 137
        },
        "'BANG": {
          "push": 138
        }
      },
      {
        "end": {
          "push": 262
        },
        "'END": {
          "push": 98
        },
        "'SEMI": {
          "push": 99
        }
      },
      {
        "$": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13557,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13591,
              0
            ]
          ]
        }
      },
      {
        "import-source": {
          "push": 263
        },
        "'NAME": {
          "push": 264
        },
        "import-special": {
          "push": 265
        },
        "import-name": {
          "push": 266
        },
        "import-string": {
          "push": 267
        },
        "'STRING": {
          "push": 268
        }
      },
      {
        "import-source": {
          "push": 269
        },
        "'NAME": {
          "push": 270
        },
        "import-special": {
          "push": 265
        },
        "import-name": {
          "push": 266
        },
        "import-string": {
          "push": 267
        },
        "'STRING": {
          "push": 268
        }
      },
      {
        "'RBRACE": {
          "push": 271
        }
      },
      {
        "'RBRACE": {
          "reductions": [
            [
              13965,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 272
        },
        "ann-field": {
          "push": 273
        },
        "record-ann_I1_I0": {
          "push": 274
        },
        "list-ann-field": {
          "push": 275
        }
      },
      {
        "'DOT": {
          "push": 276
        },
        "$": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13975,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              13985,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13985,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              13985,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13985,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13985,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13991,
              0
            ]
          ]
        }
      },
      {
        "'PERCENT": {
          "push": 277
        },
        "$": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13995,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14002,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14005,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              14008,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              14008,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14008,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14008,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14008,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              14018,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14017,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14023,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14027,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14031,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'FROM": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              14036,
              0
            ]
          ]
        },
        "'RANGLE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'PERCENT": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14035,
              0
            ]
          ]
        }
      },
      {
        "'THINARROW": {
          "push": 278
        }
      },
      {
        "'THINARROW": {
          "reductions": [
            [
              14044,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166
        },
        "'PARENNOSPACE": {
          "push": 167
        },
        "record-ann": {
          "push": 168
        },
        "ann": {
          "push": 279
        },
        "'PARENSPACE": {
          "push": 172
        },
        "'LBRACE": {
          "push": 94
        },
        "name-ann": {
          "push": 173
        },
        "arrow-ann": {
          "push": 174
        },
        "app-ann": {
          "push": 175
        },
        "pred-ann": {
          "push": 176
        },
        "dot-ann": {
          "push": 177
        },
        "noparen-arrow-ann_I0_I0": {
          "push": 280
        },
        "arrow-ann-elt": {
          "push": 281
        },
        "arrow-ann_I0": {
          "push": 181
        },
        "app-ann_I0": {
          "push": 182
        }
      },
      {
        "arrow-ann_I1_opt": {
          "push": 282
        },
        "arrow-ann_I1": {
          "push": 283
        },
        "arrow-ann_I1_I0_star": {
          "push": 284
        },
        "'NAME": {
          "reductions": [
            [
              373,
              65
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              373,
              65
            ]
          ]
        },
        "'THINARROW": {
          "reductions": [
            [
              370,
              64
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              373,
              65
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              373,
              65
            ]
          ]
        }
      },
      {
        "'LANGLE": {
          "push": 285
        }
      },
      {
        "$": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14104,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166
        },
        "'PARENNOSPACE": {
          "push": 167
        },
        "record-ann": {
          "push": 168
        },
        "ann": {
          "push": 286
        },
        "'PARENSPACE": {
          "push": 172
        },
        "'LBRACE": {
          "push": 94
        },
        "name-ann": {
          "push": 173
        },
        "arrow-ann": {
          "push": 174
        },
        "app-ann": {
          "push": 175
        },
        "pred-ann": {
          "push": 176
        },
        "dot-ann": {
          "push": 177
        },
        "arrow-ann_I0": {
          "push": 181
        },
        "app-ann_I0": {
          "push": 182
        }
      },
      {
        "'NAME": {
          "push": 287
        }
      },
      {
        "$": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14113,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 127
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 288
        },
        "multi-let-expr": {
          "push": 37
        },
        "'LET": {
          "push": 38
        },
        "letrec-expr": {
          "push": 39
        },
        "'LETREC": {
          "push": 40
        },
        "type-let-expr": {
          "push": 41
        },
        "'TYPE-LET": {
          "push": 42
        },
        "'PARENSPACE": {
          "push": 48
        },
        "expr": {
          "push": 53
        },
        "paren-expr": {
          "push": 54
        },
        "id-expr": {
          "push": 55
        },
        "prim-expr": {
          "push": 56
        },
        "lambda-expr": {
          "push": 57
        },
        "method-expr": {
          "push": 58
        },
        "app-expr": {
          "push": 59
        },
        "obj-expr": {
          "push": 60
        },
        "dot-expr": {
          "push": 61
        },
        "get-bang-expr": {
          "push": 62
        },
        "update-expr": {
          "push": 63
        },
        "extend-expr": {
          "push": 64
        },
        "if-expr": {
          "push": 65
        },
        "if-pipe-expr": {
          "push": 66
        },
        "cases-expr": {
          "push": 67
        },
        "for-expr": {
          "push": 68
        },
        "user-block-expr": {
          "push": 69
        },
        "inst-expr": {
          "push": 70
        },
        "construct-expr": {
          "push": 71
        },
        "num-expr": {
          "push": 72
        },
        "frac-expr": {
          "push": 73
        },
        "bool-expr": {
          "push": 74
        },
        "string-expr": {
          "push": 75
        },
        "'NUMBER": {
          "push": 76
        },
        "'RATIONAL": {
          "push": 77
        },
        "'TRUE": {
          "push": 78
        },
        "'FALSE": {
          "push": 79
        },
        "'LAM": {
          "push": 80
        },
        "'METHOD": {
          "push": 81
        },
        "'LBRACE": {
          "push": 82
        },
        "'LBRACK": {
          "push": 83
        },
        "'IF": {
          "push": 84
        },
        "'ASKCOLON": {
          "push": 85
        },
        "'CASES": {
          "push": 86
        },
        "'FOR": {
          "push": 87
        },
        "'BLOCK": {
          "push": 88
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'ASKCOLON": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              14119,
              0
            ]
          ]
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 289
        },
        "check-test_A0_I2_I1": {
          "push": 290
        },
        "'PARENSPACE": {
          "push": 291
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              14197,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14197,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14197,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14197,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              14199,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              14199,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              14199,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              14199,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 166
        },
        "'PARENNOSPACE": {
          "push": 167
        },
        "record-ann": {
          "push": 168
        },
        "ann": {
          "push": 292
        },
        "'PARENSPACE": {
          "push": 172
        },
        "'LBRACE": {
          "push": 94
        },
        "name-ann": {
          "push": 173
        },
        "arrow-ann": {
          "push": 174
        },
        "app-ann": {
          "push": 175
        },
        "pred-ann": {
          "push": 176
        },
        "dot-ann": {
          "push": 177
        },
        "arrow-ann_I0": {
          "push": 181
        },
        "app-ann_I0": {
          "push": 182
        }
      },
      {
        "'COMMA": {
          "reductions": [
            [
              14215,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14215,
              0
            ]
          ]
        }
      },
      {
        "'COMMA": {
          "reductions": [
            [
              14218,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              14218,
              0
            ]
          ]
        }
      },
      {
        "'COMMA": {
          "push": 293
        },
        "'COLON": {
          "push": 294
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              14264,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14264,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14264,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              14268,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              14268,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              14268,
              0
            ]
          ]
        }
      },
      {
        "'COMMA": {
          "push": 295
        },
        "'COLON": {
          "push": 296
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              14314,
              0
          ]