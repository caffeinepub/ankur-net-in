import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type ContactFormData = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactFormData {
    public func compareByEmail(a : ContactFormData, b : ContactFormData) : Order.Order {
      Text.compare(a.email, b.email);
    };

    public func compare(a : ContactFormData, b : ContactFormData) : Order.Order {
      Int.compare(a.id, b.id);
    };
  };

  let forms = Map.empty<Nat, ContactFormData>();
  var nextFormId = 0;

  public shared ({ caller }) func createForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("Missing data in form submission");
    };

    let form = {
      id = nextFormId;
      name;
      email;
      message;
    };

    forms.add(nextFormId, form);
    nextFormId += 1;
  };

  public query ({ caller }) func getAllForms() : async [ContactFormData] {
    forms.values().toArray().sort();
  };

  public query ({ caller }) func getAllFormsByEmail() : async [ContactFormData] {
    forms.values().toArray().sort(ContactFormData.compareByEmail);
  };

  public shared ({ caller }) func delete(id : Nat) : async () {
    switch (forms.get(id)) {
      case (null) { Runtime.trap("Form entry does not exist") };
      case (_) {
        forms.remove(id);
      };
    };
  };
};
